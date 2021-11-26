package Controller

import (
	"github.com/gin-gonic/gin"
)

func (controller ThreeController) CreateTakeActionController(c *gin.Context) {
	controller.service.CreateTakeActionService(c)
}

func (controller ThreeController) UpdateTakeActionController(c *gin.Context) {
	controller.service.UpdateTakeActionService(c)
}

func (controller ThreeController) GetTakeActionController(c *gin.Context) {
	controller.service.GetTakeActionsService(c)
}

// func (controller ThreeController) GetTakeActionsController(c *gin.Context) {
// 	controller.service.GetTakeActionsService(c)
// }

func (controller ThreeController) DeleteTakeActionController(c *gin.Context) {
	controller.service.DeleteTakeActionService(c)
}

// func (controller ThreeController) GetTakeActionByRecordController(c *gin.Context) {
// 	controller.service.GetTakeActionByRecordService(c)
// }
