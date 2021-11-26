package Dao

import (
	"backend/Models"
)



func (db*ThreeDao) CreateMessageDao(model Models.Message)(*Models.Message,error){
	err := db.database.Create(&model).Error
	if err != nil{
		return nil, err
	}
	return &model, nil

}


func (db*ThreeDao) UpdateMessageDao(message Models.Message) error{
	err := db.database.Save(&message).Error
	if err != nil {
		return err
	}
	return nil
}
// update를 위한 get
func (db*ThreeDao) GetMessageDao(id string)(*Models.Message, error) {
	var message Models.Message

	err := db.database.Where("id = ?", id).Find(&message).Error
	if err != nil{
		return nil, err
	}
	return &message, nil
}



func (db*ThreeDao) GetMessagesDao()(*[]Models.Message,error){
	var message []Models.Message
	err := db.database.Find(&message).Error
	if err != nil{
		return nil, err
	}
	return &message, nil

}
func (db*ThreeDao) DeleteMessageDao(id string) error{
	var message []Models.Message
	err := db.database.Where("id=?", id).First(&message).Error
	if err != nil{
		return  err
	}
	db.database.Delete(&message)
	return nil
}




