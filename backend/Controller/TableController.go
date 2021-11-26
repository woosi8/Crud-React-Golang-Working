package Controller

import "github.com/gin-gonic/gin"

// CreateSubTitleController(c*gin.Context)
// UpdateSubTitleController(c*gin.Context)
// GetSubTitleController(c*gin.Context)
// DeleteSubTitleController(c*gin.Context)


func (cntlr *ThreeController) CreateTableController(c*gin.Context){
	cntlr.service.CreateTableService(c)
}
func (cntlr *ThreeController) GetTableController(c*gin.Context){
	cntlr.service.GetTablesService(c)
}
func (cntlr *ThreeController) UpdateTableController(c*gin.Context){
	cntlr.service.UpdateTableService(c)
}
func (cntlr *ThreeController) DeleteTableController(c*gin.Context){
	cntlr.service.DeleteTableService(c)
}
func (cntlr *ThreeController) GetTableOneController(c*gin.Context){
	cntlr.service.GetTableOneService(c)
}



