//reader,FileReader,readAsDataURL,data,onload,result,onerror,error,

const imageTobase64 = async (image) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  const data = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  return data;
};

export default imageTobase64;
