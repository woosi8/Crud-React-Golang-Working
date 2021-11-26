package Service

import (
	"backend/Models"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

// CreateMessageDao(model Models.Message)(*Models.Message,error)
// UpdateMessageDao(model Models.Message)(*Models.Message,error)
// GetMessageDao()(*[]Models.Message,error)
// DeleteMessageDao(id string) error


func (s*ThreeService) CreateTableService(c*gin.Context) {
	var table Models.Table

	if c.BindJSON(&table) != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "json binding error",
		})
	}

	result,err := s.dao.CreateTableDao(table)


	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message create complete", "result" :result})

}


func (s*ThreeService) GetTablesService(c*gin.Context) {


	result,err := s.dao.GetTablesDao()


	if err != nil{
		c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
			"status" : "db create error",
		})
	}
	c.JSON(http.StatusOK, gin.H{"status": "message create complete", "result" :result})

}

func (s*ThreeService) DeleteTableService(c*gin.Context) {
	id := c.Param("id")
	sliced := strings.Split(id, ",")

	for _, uuid := range sliced {
		err := s.dao.DeleteTableDao(uuid)
		if err != nil{
			c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
				"status" : err.Error(),
			})
		}
	}

	c.JSON(http.StatusOK, gin.H{"status": "message delete complete"})

}


func (s*ThreeService) GetTableOneService(c*gin.Context) {
	// id := c.Param("id")
	// result, err := s.dao.GetTableDao(id)
	// if err != nil {
	// 	c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 		"status" : err,
	// 	})
	// }
	

	// if c.BindJSON(&result) != nil{
	// 	c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 		"status" : "json binding error",
	// 	})
	// }

	// id := c.Param("id")
	// err := s.dao.GetTableOneDao(id)
	// if err != nil{
	// 	c.AbortWithStatusJSON(http.StatusBadRequest,gin.H{
	// 	"status" : "db create error",
	// 	})
	// }	
	// c.JSON(http.StatusOK, gin.H{"status": "message complete"})

	id := c.Param("id")
	if result, err := s.dao.GetTableOneDao(id); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"status": "error",
			"error":  err.Error(),
		})
	} else {
		c.JSON(http.StatusOK, gin.H{"status": "ok", "result": &result})
	}

}




func (s*ThreeService) UpdateTableService(c*gin.Context) {
	id := c.Param("id")

	// Get
	result, err := s.dao.GetTableDao(id)
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
	err2 := s.dao.UpdateTableDao(*result)
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

