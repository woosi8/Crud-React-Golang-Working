package Config

import (
	"backend/Models"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func DBConnect() *gorm.DB {
	dsn := "cps:cps@tcp(localhost:3323)/article?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Print("failed to connect Database!!")
		panic(err)
	}

	log.Print("Successefully connected")

	log.Print("DB MIgrating Start")
	db.AutoMigrate(
		Models.Message{},
		Models.Title{},
		Models.Table{},
		Models.TakeAction{},
	)
	log.Print("DB Migraiting Finished")

	return db
}
