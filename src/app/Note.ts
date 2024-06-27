export class Note{

	id: number
	title: string
	desc: string
	auther: string
	status: string
	active: boolean

	constructor(){
		this.id=0;
		this.title='';
		this.auther='';
		this.status='';
		this.active=false;
		this.desc='';		
	}
}