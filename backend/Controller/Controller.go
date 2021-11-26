package Controller

import (
	"backend/Service"

	"github.com/gin-gonic/gin"
)

type ThreeController struct {
	service Service.ThreeServiceInterface
}

func NewThreeController(service Service.ThreeServiceInterface) *ThreeController {
	objs := &ThreeController{service: service}
	return objs
}

// ThreeController.service.Create
type ThreeControllerInterface interface{
	CreateMessageController(c*gin.Context)
	UpdateMessageController(c*gin.Context)
	GetMessageController(c*gin.Context)
	DeleteMessageController(c*gin.Context)

	// CreateTitleController(c*gin.Context)
	// UpdateTitleController(c*gin.Context)
	// GetTitleController(c*gin.Context)
	// DeleteTitleController(c*gin.Context)

	CreateTableController(c*gin.Context)
	UpdateTableController(c*gin.Context)
	GetTableController(c*gin.Context)
	GetTableOneController(c*gin.Context)
	DeleteTableController(c*gin.Context)

	
	CreateTakeActionController(c*gin.Context)
	UpdateTakeActionController(c*gin.Context)
	GetTakeActionController(c*gin.Context)
	DeleteTakeActionController(c*gin.Context)
}