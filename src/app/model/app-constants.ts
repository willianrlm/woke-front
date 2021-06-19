export class AppConstants {
  public static get server(): string {
    return 'http://localhost/api/'
  }

  public static get login(): string {
    return this.server + 'authenticate'
  }

  public static get companies(): string {
    return this.server + 'companies'
  }

  public static get profile(): string {
    return this.server + 'user'
  }

  public static get updateUser(): string {
    return this.server + 'user/update'
  }

  public static get candidate(): string {
    return this.server + 'candidate/save'
  }

  public static get communicationApiError(): string {
    return 'Falha ao tentar se comunicar com a API: "' + this.server + '".'
  }

  public static get error(): string {
    return 'Ocorreu um erro inesperado! Contate alguém...'
  }

  public static get userPassword(): string {
    return 'Usuário ou Senha incorretos'
  }

  public static get authenticate(): string {
    return this.login + '/login=google&password=123654'
  }

  public static get candidates(): string {
    return this.server + 'candidates/company/1'
  }

  public static get candidateById(): string {
    return this.server + 'candidate/1'
  }
}
