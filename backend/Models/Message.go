package Models

type Message struct {
	ID          uint
	Group       string `json:"groupname"`
	ProjectName string `json:"projectname"`
	ProjectGoal string `json:"projectgoal"`
	Comment     string `json:"comment"`
}