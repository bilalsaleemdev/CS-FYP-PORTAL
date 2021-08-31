declare module "*.svg" {
  const content: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}