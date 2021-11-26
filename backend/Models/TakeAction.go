package Models

type TakeAction struct {
	// gorm.Model
	// ID                 uuid.UUID
	// IRTID              uuid.UUID           `json:"irt_id"`
	// TakeActionComments []TakeActionComment `gorm:"foreignKey:TAID" json:"take_action_comments"`

	ID                 uint
	TakeActionComments []TakeActionComment `json:"take_action_comments"`
}
