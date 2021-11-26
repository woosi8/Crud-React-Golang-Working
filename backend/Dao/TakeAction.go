package Dao

import (
	"backend/Models"
)


func (db*ThreeDao) CreateTakeActionDao(take Models.TakeAction)(*Models.TakeAction,error){

	if err := db.database.Create(&take).Error; err != nil {
		return &take, err
	} else {
		return &take, err
	}
	
}


func (db*ThreeDao) UpdateTakeActionDao(take Models.TakeAction) error{
	err := db.database.Save(&take).Error
	if err != nil {
		return err
	}
	return nil
}
// update를 위한 get
func (db*ThreeDao) GetTakeActionDao(id string)(*Models.TakeAction, error) {
	var take Models.TakeAction

	err := db.database.Where("id = ?", id).Find(&take).Error
	if err != nil{
		return nil, err
	}
	return &take, nil
}



func (db*ThreeDao) GetTakeActionsDao()(*[]Models.TakeAction,error){
	var take []Models.TakeAction
	err := db.database.Find(&take).Error
	if err != nil{
		return nil, err
	}
	return &take, nil

}
func (db*ThreeDao) DeleteTakeActionDao(id string) error{
	var take []Models.TakeAction
	err := db.database.Where("id=?", id).First(&take).Error
	if err != nil{
		return  err
	}
	db.database.Delete(&take)
	return nil
}




