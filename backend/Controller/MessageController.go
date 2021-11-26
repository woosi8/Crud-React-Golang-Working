package Controller

import "github.com/gin-gonic/gin"

// CreateSubTitleController(c*gin.Context)
// UpdateSubTitleController(c*gin.Context)
// GetSubTitleController(c*gin.Context)
// DeleteSubTitleController(c*gin.Context)


func (cntlr *ThreeController) CreateMessageController(c*gin.Context){
	cntlr.service.CreateMessageService(c)
}
func (cntlr *ThreeController) GetMessageController(c*gin.Context){
	cntlr.service.GetMessagesService(c)
}
func (cntlr *ThreeController) DeleteMessageController(c*gin.Context){
	cntlr.service.DeleteMessageService(c)
}
func (cntlr *ThreeController) UpdateMessageController(c*gin.Context){
	cntlr.service.UpdateMessageService(c)
}
