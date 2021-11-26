package Service

import (
	"backend/Dao"

	"github.com/gin-gonic/gin"
)

type ThreeService struct {
	dao Dao.ThreeDaoInterface
}

func NewThreeService(dao Dao.ThreeDaoInterface) *ThreeService {
	objs := &ThreeService{dao: dao}
	return objs
}

// ThreeService.dao.Create
type ThreeServiceInterface interface{
	CreateMessageService(c*gin.Context)
	UpdateMessageService(c*gin.Context)
	GetMessagesService(c*gin.Context)
	DeleteMessageService(c*gin.Context)

	// CreateTitleService(c*gin.Context)
	// UpdateTitleService(c*gin.Context)
	// GetTitleService(c*gin.Context)
	// DeleteTitleService(c*gin.Context)

	CreateTableService(c*gin.Context)
	UpdateTableService(c*gin.Context)
	GetTablesService(c*gin.Context)
	DeleteTableService(c*gin.Context)
	GetTableOneService(c*gin.Context)


	GetTakeActionsService(c*gin.Context)
	CreateTakeActionService(c*gin.Context)
	UpdateTakeActionService(c*gin.Context)
	DeleteTakeActionService(c*gin.Context)
}