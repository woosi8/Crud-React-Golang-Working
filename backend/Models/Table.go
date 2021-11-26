package Models

type Table struct {
	ID         uint
	Name       string `json:"name"`
	Email      string `json:"email"`
	PhonNumber string `json:"phonnumber"`
	Company    string `json:"company"`
}