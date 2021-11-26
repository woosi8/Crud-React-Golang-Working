package Dao

import (
	"backend/Models"
)



func (db*ThreeDao) CreateTableDao(model Models.Table)(*Models.Table,error){
	err := db.database.Create(&model).Error
	if err != nil{
		return nil, err
	}
	return &model, nil

}


func (db*ThreeDao) UpdateTableDao(table Models.Table) error{
	err := db.database.Save(&table).Error
	if err != nil {
		return err
	}
	return nil
}
// update를 위한 get
func (db*ThreeDao) GetTableDao(id string)(*Models.Table, error) {
	var table Models.Table

	err := db.database.Where("id = ?", id).Find(&table).Error
	if err != nil{
		return nil, err
	}
	return &table, nil
}


// func (db*ThreeDao) GetTableOneDao(id string)(*Models.Table, error) {
// 	var table Models.Table

// 	err := db.database.Where("id = ?", id).First(&table).Error
// 	if err != nil{
// 		return nil, err
// 	}
// 	return &table, nil
// }

func (db*ThreeDao) GetTableOneDao(id string)(*Models.Table, error){


	var table Models.Table

	// err := db.database.Where("id = ?", id).First(&table).Error
	// if err != nil{
	// 	return nil, err
	// }
	// return &table, nil

	
	if err := db.database.Where("id = ?", id).First(&table).Error; err != nil {
		return &table, err
	} else {
		return &table, err
	}

}




func (db*ThreeDao) GetTablesDao()(*[]Models.Table,error){
	var table []Models.Table
	err := db.database.Find(&table).Error
	if err != nil{
		return nil, err
	}
	return &table, nil

}




func (db*ThreeDao) DeleteTableDao(id string) error{
	var table Models.Table
	err := db.database.Where("id = ?", id).First(&table).Error
	if err != nil{
		return  err
	}
	db.database.Delete(&table)
	return nil
}






