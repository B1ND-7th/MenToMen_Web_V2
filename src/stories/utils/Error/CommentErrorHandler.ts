import CommonErrorHandler from "./CommonErrorHandler";

class CommentErrorHandler extends CommonErrorHandler {
  registCommentHandler = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "댓글을 등록하지 못했습니다.";
    }
  };

  modifyCommentHandler = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "댓글을 수정하지 못했습니다.";
    }
  };

  deleteCommentHandler = (status: number) => {
    switch (status) {
      case 500:
        return this.serverError();
      default:
        return "댓글을 삭제하지 못했습니다.";
    }
  };
}

export default new CommentErrorHandler();
