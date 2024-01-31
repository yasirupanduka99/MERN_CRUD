const itemModel = require('../models/item.model');

//Add item router controller
const addItem = async (req, res) => {

    try{

        const { itemName, itemCategory, itemQty, itemDescription } = req.body;

        const newItemData = {
            itemName: itemName,
            itemCategory: itemCategory,
            itemQty: itemQty,
            itemDescription: itemDescription,
        }

        const newItemObj = new itemModel(newItemData);
        await newItemObj.save();

        return res.status(200).send({
            status: true,
            message: "✨ :: Data saved successfuly!"
        });
        
    }catch(err){
        return res.status(500).send({
            status: false,
            message: err.message
        });
    }

}

//Get All items route controller
const getAllItems = async (req, res) => {

    try{

        const allItems = await itemModel.find();

        return res.status(200).send({
            status: true,
            message: "✨ :: All items are fetched!",
            AllItems: allItems,
        })

    }catch(err){
        return res.status(500).send({
            status: false,
            message: err.message
        });
    }

}

//Get One-specified item route controller
const getOneItem = async (req, res) => {

    try{

        const itemID =  req.params.id; //getting id of item from URL using params
        const item = await itemModel.findById(itemID);

        return res.status(200).send({
            status: true,
            message: "✨ :: Item Fetched!",
            Item: item,
        })

    } catch(err){
        return res.status(500).send({
            status: false,
            message: err.message,
        })
    }

}

//Update item details router controller
const updateItem = async (req, res) => {

    try{

        const itemID = req.params.id;
        const { itemName, itemCategory, itemQty, itemDescription } = req.body;

        const itemData = {
            itemName: itemName,
            itemCategory: itemCategory,
            itemQty: itemQty,
            itemDescription: itemDescription,
        }

        const updateItemObj = await itemModel.findByIdAndUpdate(itemID, itemData);

        return res.status(200).send({
            status: true,
            message: "✨ :: Item Updated!",
            updateItem: updateItemObj,
        })

    }catch(err){
        return res.status(500).send({
            status: false,
            message: err.message,
        })
    }

}

//Delete item route controller
const deleteItem = async (req, res) => {

    try{

        const itemID = req.params.id;
        const delItem = await itemModel.findByIdAndDelete(itemID);

        return res.status(200).send({
            status: true,
            message: "✨ :: Items Deleted!",
            deleteItem: delItem
        })

    }catch(err){
        return res.status(500).send({
            status: false,
            message: err.message,
        })
    }

}

module.exports = {
    addItem,
    getAllItems,
    getOneItem,
    updateItem,
    deleteItem,
};
