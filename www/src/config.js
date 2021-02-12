// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7ns62eo6j98inlqi674vof64ou",
  "api_base_url": "https://3nk2r4ol19.execute-api.us-east-1.amazonaws.com/{StageNameParam}",
  "cognito_hosted_domain": "mytodoappdemo-lambdaexample.auth.us-east-1.amazoncognito.com",
  "redirect_url": "https://master.d2irmzksj2cyvt.amplifyapp.com"
};

export default config;
