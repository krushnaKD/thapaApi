const Product  = require("../models/product")

const getAllProducts = async(req,res) =>{

  const {company,name,sort,select} = req.query;
  const queryobject = {}
  if(company){
    queryobject.company = company;
       
  }

  // if(featured ) {
  //   queryobject.featured = featured;
  // }

  if(name) {
    queryobject.name = { $regex:name, $options:"i"};
  }

 let apiData = Product.find(req.query)
 
  if(sort) {
    let sortFix = sort.split(",").join("");
    apiData = apiData.sort(sortFix)
  }

  if(select) {
    // let selectFix = select.replace(","," ");
    let selectFix = select.split(",").join("");
    apiData = apiData.select(selectFix)
   }

   let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 10;

   let skip = (page - 1 ) * limit;

   apiData = apiData.skip(skip).limit(limit);

 
   const products = await apiData
  res.status(200).json({products,nbHits:products.length}); 
}

const getAllProductsTesting = async(req,res) =>{
  const myData = await Product.find(req.query)
  res.status(200).json({myData});
  res.status(200).json({myData,nbHits:myData.length});
  }  ;

module.exports = {getAllProducts,getAllProductsTesting}