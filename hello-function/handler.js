module.exports = async (event, context) => {
  // console.log(JSON.stringify(event.body));
  const scenarioParams = event.body.scenario_params;
  const currentPoint = Number(scenarioParams.currentPoint);
  const addPoint = Number(scenarioParams.addPoint);
  const result = {
  point: currentPoint + addPoint,
  };
  // console.log(JSON.stringify(result));
  return context
  .status(200)
  .succeed(result);
};
