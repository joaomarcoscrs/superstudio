export default class WorkflowApi {
  constructor(private baseApiUrl: string) {
    this.baseApiUrl = baseApiUrl;
  }

  async fetch(token: string) {
    const response = await fetch(`${this.baseApiUrl}/workflows/${token}`);
    return response.json();
  }
}
