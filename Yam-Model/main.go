package main

import (
	"encoding/gob"
	"fmt"
	"os"
)

type TinyModel struct {
	Threshold float64
}

func (m *TinyModel) Predict(x float64) string {
	if x > m.Threshold {
		return "Positive"
	}
	return "Negative"
}

func saveModel(filename string, model *TinyModel) error {
	file, err := os.Create(filename)
	if err != nil {
		return err
	}
	defer file.Close()

	encoder := gob.NewEncoder(file)
	return encoder.Encode(model)
}

func loadModel(filename string) (*TinyModel, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var model TinyModel
	decoder := gob.NewDecoder(file)
	err = decoder.Decode(&model)
	return &model, err
}

func main() {
	fmt.Println("🧠 Creating smallest model...")

	model := &TinyModel{Threshold: 0.5}

	err := saveModel("tiny_model.gob", model)
	if err != nil {
		panic(err)
	}
	fmt.Println("💾 Model saved to tiny_model.gob")

	test := 0.6
	fmt.Printf("🔍 Predicting for %.2f: %s\n", test, model.Predict(test))
}
