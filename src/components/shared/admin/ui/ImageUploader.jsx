import Image from "next/image"

const ImageUploader = ({name, uploaderTitle}) => {
  return (
    <label
    className="h-[300px] w-full p-4 border border-dashed rounded-md border-gray-line flex items-center justify-center hover:cursor-pointer hover:border-2 hover:border-gray-title"
    htmlFor="coverImage"
  >
    <div className="space-y-4 flex flex-col items-center ">
      <h1 className="font-medium">{uploaderTitle}</h1>
      <Image
        src="/assets/imgs/upload-icon.png"
        width={87.2}
        height={81.39}
        alt="upload icon"
      />
    </div>
    <input
      type="file"
      name={name}
      accept="image/*"
      className="hidden"
    />
  </label>
  )
}

export default ImageUploader
