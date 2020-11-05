const image = (
  width = '200',
  height = '200',
  background = 'FDF18D',
  color = '26303C',
  text = 'frichti.co',
) =>
  `https://via.placeholder.com/${width}x${height}/${background}/${color}?text=${text}`;

export default {
  image,
};
