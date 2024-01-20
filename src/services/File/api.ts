import { MenToMenAxios } from "@/src/libs/Axios/MenToMenAxios";
import { FileResponse } from "@/src/types/File/file.type";

class FileApi {
  public async postFileUploadApi(file: FormData): Promise<FileResponse> {
    const { data } = await MenToMenAxios.post("/file/upload", file);
    return data;
  }
}

export default new FileApi();
