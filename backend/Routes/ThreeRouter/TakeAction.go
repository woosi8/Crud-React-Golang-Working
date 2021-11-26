package ThreeRouter

import (
	"backend/Controller"

	"github.com/gin-gonic/gin"
)

func TakeRouter(router *gin.Engine, cntlr Controller.ThreeControllerInterface) {

	// router.POST("app/team/create_table", func(c *gin.Context) {
	router.POST("app/team/create_take_action", func(c *gin.Context) {
		cntlr.CreateTakeActionController(c)
	})
	router.GET("get_take_actions", func(c *gin.Context) {
		cntlr.GetTakeActionController(c)
	})
	router.DELETE("delete_take_action/:id", func(c *gin.Context) {
		cntlr.DeleteTakeActionController(c)
	})
	router.PUT("/update_take_action/:id", func(c *gin.Context) {
		cntlr.UpdateTakeActionController(c)
	})

}