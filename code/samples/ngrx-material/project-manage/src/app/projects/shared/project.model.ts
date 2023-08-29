export class Project {
  id: number;
  name: string;
  description: string;
  editing: boolean;
  imageUrl = 'https://placeimg.com/500/300/arch/' + (Math.floor(Math.random() * 100) + 20);
  contractTypeId: number;
  isActive: boolean;
  contractSignedOn: Date;
  budget: number;
}
