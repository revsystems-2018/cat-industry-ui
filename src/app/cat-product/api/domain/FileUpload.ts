export class FileUpload {
  id: string;
  file: File;
}

export class FileUploadDTO {

  constructor(referenceId: string) {
    this.referenceId = referenceId;
  }

  referenceId: string;
}
