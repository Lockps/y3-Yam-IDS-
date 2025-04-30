package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"

	"github.com/sjwhitworth/golearn/base"
	"github.com/sjwhitworth/golearn/evaluation"
	"github.com/sjwhitworth/golearn/trees"
)

// Custom struct to store the model
type SerializableTree struct {
	Model *trees.ID3DecisionTree
}

func main() {
	modelPath := "./core/model/model.json"

	if _, err := os.Stat(modelPath); os.IsNotExist(err) {
		trainAndSaveModel(modelPath)
	} else {
		loadAndPredict(modelPath)
	}
}

func trainAndSaveModel(path string) {
	fmt.Println("Training model...")

	data, err := base.ParseCSVToInstances("./core/data/BruteForce.csv", true)
	if err != nil {
		panic(err)
	}

	trainData, testData := base.InstancesTrainTestSplit(data, 0.7)

	tree := trees.NewID3DecisionTree(0.6)
	tree.Fit(trainData)

	predictions, _ := tree.Predict(testData)
	confMat, _ := evaluation.GetConfusionMatrix(testData, predictions)
	fmt.Println("Evaluation:")
	fmt.Println(evaluation.GetSummary(confMat))

	model := SerializableTree{Model: tree}
	bytes, err := json.MarshalIndent(model, "", "  ")
	if err != nil {
		panic(err)
	}
	os.WriteFile(path, bytes, 0644)
	fmt.Println("Model saved to", path)
}

func loadAndPredict(path string) {
	fmt.Println("Loading model from", path)

	bytes, err := ioutil.ReadFile(path)
	if err != nil {
		panic(err)
	}

	var model SerializableTree
	err = json.Unmarshal(bytes, &model)
	if err != nil {
		panic(err)
	}

	data, err := base.ParseCSVToInstances("./core/data/BruteForce.csv", true)
	if err != nil {
		panic(err)
	}
	_, testData := base.InstancesTrainTestSplit(data, 0.7)

	predictions, _ := model.Model.Predict(testData)
	confMat, _ := evaluation.GetConfusionMatrix(testData, predictions)
	fmt.Println("Loaded model evaluation:")
	fmt.Println(evaluation.GetSummary(confMat))
}
