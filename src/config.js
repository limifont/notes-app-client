export default {
  s3: {
    BUCKET: 'lindsey-notes-app-uploads'
  },
  apiGateway: {
    URL: 'https://3akg7nly37.execute-api.us-east-1.amazonaws.com/prod',
    REGION: 'us-east-1',
  },
  cognito: {
    MAX_ATTACHMENT_SIZE: 5000000,
    USER_POOL_ID : 'us-east-1_aRxOzQW2w',
    APP_CLIENT_ID : '45vkq3vdcu8r3fidhmum91aaif',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:0d9cffe6-4f77-4c01-b243-62fff466148d'
  }
};