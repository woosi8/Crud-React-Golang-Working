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


func (s*ThreeService) CreateMessageService(c*gin.Context) {
	var message Models.Message

	if c.BindJSON(&message) != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "json binding error",
		})
	}

	result,err := s.dao.CreateMessageDao(message)


	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message create complete", "result" :result})

}


func (s*ThreeService) GetMessagesService(c*gin.Context) {


	result,err := s.dao.GetMessagesDao()


	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message create complete", "result" :result})

}

func (s*ThreeService) DeleteMessageService(c*gin.Context) {
	id := c.Param("id")

	err := s.dao.DeleteMessageDao(id)



	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message delete complete"})

}




func (s*ThreeService) UpdateMessageService(c*gin.Context) {
	id := c.Param("id")

	// Get
	result, err := s.dao.GetMessageDao(id)
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

	// Update
	err2 := s.dao.UpdateMessageDao(*result)
	if err2 != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : err,
		})
	}
	
	
	
	// 하나씩===============================================
	// var forupdateMessage Models.Message
	// if c.BindJSON(&forupdateMessage) != nil{
	// 	c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 		"status" : "json binding error",
	// 	})
	// }

	// newGroup := forupdateMessage.Group
	// newProjectGoal := forupdateMessage.ProjectGoal
	// newProjectName := forupdateMessage.ProjectName

	// log.Print("afhughwejghwejhej")
	// log.Print(newGroup)

	// result, err := s.dao.GetMessageDao(id)
	// if err != nil {
	// 	c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 		"status" : err,
	// 	})
	// }

	// result.Group = newGroup
	// result.ProjectGoal = newProjectGoal
	// result.ProjectName = newProjectName

	// err2 := s.dao.UpdateMessageDao(*result)
	// if err2 != nil {
	// 	c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 		"status" : err,
	// 	})
	// }

	c.JSON(http.StatusOK, gin.H{"status": "message update complete"})
}

