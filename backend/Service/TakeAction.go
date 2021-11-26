package Service

import (
	"backend/Models"
	"net/http"

	"github.com/gin-gonic/gin"
)

// CreateMessageDao(model Models.Message)(*Models.Message,error)
// UpdateMessageDao(model Models.Message)(*Models.Message,error)
// GetMessageDao()(*[]Models.Message,error)
// DeleteMessageDao(id string) error


func (s*ThreeService) CreateTakeActionService(c*gin.Context) {
	var take Models.TakeAction

	if c.BindJSON(&take) != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "json binding error",
		})
	}

	result,err := s.dao.CreateTakeActionDao(take)

	

	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message create complete", "result" :result})

}


func (s*ThreeService) GetTakeActionsService(c*gin.Context) {


	result,err := s.dao.GetTakeActionsDao()


	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message create complete", "result" :result})

}

func (s*ThreeService) DeleteTakeActionService(c*gin.Context) {
	id := c.Param("id")

	err := s.dao.DeleteTakeActionDao(id)



	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message delete complete"})

}




func (s*ThreeService) UpdateTakeActionService(c*gin.Context) {
	id := c.Param("id")

	// Get
	result, err := s.dao.GetTakeActionDao(id)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : err,
		})
	}
	
	// mapping (body)
	if c.BindJSON(&result) != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "json binding error",
		})
	}

	err2 := s.dao.UpdateTakeActionDao(*result)
	if err2 != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : err,
		})
	}
	



	c.JSON(http.StatusOK, gin.H{"status": "message update complete"})
}

