package ThreeRouter

import (
	"backend/Controller"

	"github.com/gin-gonic/gin"
)

func MessageRouter(router *gin.Engine, cntlr Controller.ThreeControllerInterface) {

	router.POST("app/team/create_message", func(c *gin.Context) {
		cntlr.CreateMessageController(c)
	})
	router.GET("get_messages", func(c *gin.Context) {
		cntlr.GetMessageController(c)
	})
	router.DELETE("delete_message/:id", func(c *gin.Context) {
		cntlr.DeleteMessageController(c)
	})
	router.PUT("/update_title/:id", func(c *gin.Context) {
	// router.PUT("/update_title/:id/:groupname/:projectname/:projectgoal", func(c *gin.Context) {
		cntlr.UpdateMessageController(c)
	})

}