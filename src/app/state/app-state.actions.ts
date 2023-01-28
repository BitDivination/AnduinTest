export class GetUsers {
  public static type: string = "[AppState] GetUsers";

  constructor() {}
}

export class GetPosts {
  public static type: string = "[AppState] GetPosts";

  constructor() {}
}

export class GetComments {
  public static type: string = "[AppState] GetComments";

  constructor() {}
}

export class UpdateFeedSearchTerm {
  public static type: string = "[AppState] UpdateFeeSearchTerm";

  constructor(public searchTerm: string) { }
}