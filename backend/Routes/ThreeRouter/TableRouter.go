package ThreeRouter

import (
	"backend/Controller"

	"github.com/gin-gonic/gin"
)

func TableRouter(router *gin.Engine, cntlr Controller.ThreeControllerInterface) {

	// router.POST("app/team/create_table", func(c *gin.Context) {
	router.POST("app/team/create_table", func(c *gin.Context) {
		cntlr.CreateTableController(c)
	})
	router.GET("get_table", func(c *gin.Context) {
		cntlr.GetTableController(c)
	})
	router.DELETE("delete_table/:id", func(c *gin.Context) {
		cntlr.DeleteTableController(c)
	})
	router.GET("get_tables/:id", func(c *gin.Context) {
		cntlr.GetTableOneController(c)
	})
	router.PUT("/update_table/:id", func(c *gin.Context) {
	// router.PUT("/update_title/:id/:groupname/:projectname/:projectgoal", func(c *gin.Context) {
		cntlr.UpdateTableController(c)
	})


	

}