package main

import (
	"backend/Config"
	"backend/Controller"
	"backend/Dao"
	"backend/Routes/ThreeRouter"
	"backend/Service"
	"fmt"

	"github.com/gin-gonic/gin"
)

func main(){
	fmt.Println("Hello golang")
	fmt.Print("Server Started")
	r := gin.Default()
	db := Config.DBConnect()

	threedao := Dao.NewThreeDao(db)
	threeservice := Service.NewThreeService(threedao)
	threecontroller := Controller.NewThreeController(threeservice)
	ThreeRouter.MessageRouter(r, threecontroller)
	ThreeRouter.TableRouter(r, threecontroller)
	ThreeRouter.TakeRouter(r, threecontroller)
	





	// r.GET("/ping", func (c *gin.Context)  {
	// 	c.JSON(200, gin.H{
	// 		"response" : "안녕",
	// 	})
	// })



	// r.POST("/create_message", func(c *gin.Context) {
	// 	var message Models.Message

	// 	if c.BindJSON(&message) != nil{
	// 		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 			"status" : "json binding error",
	// 		})
	// 	}
	// 	if db.Create(&message).Error != nil {
	// 		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 			"status" : "db creating error",
	// 		})
	// 	}

	// 	c.JSON(http.StatusOK, gin.H{"status": "message create complete"})

	// })


	r.Run(":8088")
}