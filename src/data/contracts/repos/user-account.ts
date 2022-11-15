export interface LoadUserAccountRepository {
  load: (params: LoadUserAccountRepository.Params) => Promise<LoadUserAccountRepository.Result>
}

export interface CreateFacebookAccountRepository {
  createFromFacebook: (params: LoadUserAccountRepository.Params) => Promise<void>
}

export interface UpdateFacebookAccountRepository {
  updateWithFacebook: (params: UpdateFacebookAccountRepository.Params) => Promise<void>
}

export namespace LoadUserAccountRepository {
  export type Params = {
    email: string
  }

  export type Result = undefined | {
    id: string
    name?: string
  }
}

export namespace CreateFacebookAccountRepository {
  export type Params = {
    email: string
    name: string
    facebookId: string
  }
}

export namespace UpdateFacebookAccountRepository {
  export type Params = {
    id: string
    name: string
    facebookId: string
  }
}
