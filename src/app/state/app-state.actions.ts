export class GetUsers {
  public static type = '[AppState] GetUsers';

  constructor() {}
}

export class GetPosts {
  public static type = '[AppState] GetPosts';

  constructor() {}
}

export class GetComments {
  public static type = '[AppState] GetComments';

  constructor() {}
}

export class UpdateFeedSearchTerm {
  public static type = '[AppState] UpdateFeeSearchTerm';

  constructor(public searchTerm: string) { }
}
