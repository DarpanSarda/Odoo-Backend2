const CategoryModel = require("../models/CategoryModel");
const ProductModel = require("../models/ProductModel");

const createProduct = async(reqData) =>{
    let toplevel = await CategoryModel.findOne({name:reqData.topLevelCategory});
    console.log(toplevel)
    if(!toplevel)
    {
        toplevel = new CategoryModel({
            name:reqData.topLevelCategory,
            // parentCategory:null,
            level:1,
        })
        await toplevel.save();
    }
    console.log(toplevel)
    let secondlevel = await CategoryModel.findOne({
        name:reqData.secondLevelCategory,
        parentCategory: toplevel._id,
    })
    console.log(toplevel._id)
    console.log(reqData.secondLevelCategory)
    console.log(secondlevel)
    if(secondlevel === null)
    {
        secondlevel = new CategoryModel({
            name:reqData.secondLevelCategory,
            parentCategory:toplevel._id,
            level:2,
        })
        await secondlevel.save();
    }
    console.log(secondlevel)
    const product = new ProductModel({
        title:reqData.title,
        description:reqData.description,
        quantity:reqData.quantity,
        renter:reqData.renter,
        brand:reqData.brand,
        ImageUrl:reqData.ImageUrl,
        price:reqData.price,
        dimension:reqData.dimension,
        category:secondlevel._id,
    })
    // console.log(product)
    return await product.save();
}

const deleteProduct = async(productId)=>{
    const product=await findProductById(productId);
    
    await ProductModel.findByIdndDelete(productId);
    return "Product Deleted Successfully"
}

const updateProduct = async(productId,req)=>{
    const updatedProduct = await ProductModel.findByIdandUpdate(productId,req); 
    return updatedProduct;
}

const findProductById = async(productId)=>{
    const product=ProductModel.findById(productId).populate("category").exec();

    if(!product)
    {
        throw new Error("Product not found")
    }
    return product;
}

const getAllProducts=async (reqQuery)=>{
    let{category,minPrice,maxPrice,sort,stock,pageNumber,pageSize}=reqQuery;

    pageSize= pageSize || 10;

    let query = ProductModel.find().populate("category");

    if(category)
    {
        const existCategory = await CategoryModel.findOne({name:category});
        if(existCategory){
            query=query.where("category").equals(existCategory._id);
        }
        else
        {
            return{content:[],currentPage:1,totalPages:0}
        }
    }


    if(minPrice && maxPrice)
    {
        query=query.where('discountedPrice').gte(minPrice).lte(maxPrice);
    }
    if(stock)
    {
        if(stock="in_stock")
        {
            query=query.where("quantity").gt(0)
        }

        else if(stock="out_stock")
        {
            query=query.where("quantity").lt(1)
        }
    }
    if(sort)
    {
        const sortDirection = (sort==="price_height"?-1:1);
        query=query.sort({discountedPrice:sortDirection})
    }

    const totalProducts = await ProductModel.countDocuments(query);
    const skip = (pageNumber-1)*pageSize;
    const products=await query.exec();
    const totalPages=Math.ceil(totalProducts/pageSize);
    console.log(products)
    return {content:products, currentPage:pageNumber,totalPages}
}

const createMultipleProduct = async(products)=>{
    for(let product of products)
    {
        await createProduct(product);
    }
}

module.exports={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMultipleProduct,
}