package Dao

import (
	"backend/Models"

	"gorm.io/gorm"
)

type ThreeDao struct {
	database *gorm.DB
}

func NewThreeDao(database *gorm.DB) *ThreeDao {
	objs := &ThreeDao{database: database}
	return objs
}

// ThreeDao.database.Create
type ThreeDaoInterface interface{
	CreateMessageDao(model Models.Message)(*Models.Message,error)
	GetMessagesDao()(*[]Models.Message,error)
	DeleteMessageDao(id string) error
	UpdateMessageDao(message Models.Message) error
	GetMessageDao(id string)(*Models.Message, error)

	// CreateTitleDao(model Models.Message)(*Models.Message,error)
	// UpdateTitleDao(model Models.Message)(*Models.Message,error)
	// GetTitleDao()(*[]Models.Message,error)
	// DeleteTitleDao(id string) error

	CreateTableDao(model Models.Table)(*Models.Table,error)
	GetTablesDao()(*[]Models.Table,error)
	// DeleteTableDao(id string)(*Models.Table, error)
	DeleteTableDao(id string) error
	UpdateTableDao(table Models.Table) error
	GetTableDao(id string)(*Models.Table, error)
	GetTableOneDao(id string)(*Models.Table, error)


	CreateTakeActionDao(take Models.TakeAction) (*Models.TakeAction, error)
	GetTakeActionsDao() (*[]Models.TakeAction, error)
	DeleteTakeActionDao(id string) error
	UpdateTakeActionDao(model Models.TakeAction) error
	GetTakeActionDao(id string) (*Models.TakeAction, error)
}