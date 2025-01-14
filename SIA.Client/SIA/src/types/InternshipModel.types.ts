export interface InternshipModel {
    id: number;
    companyMail: string;
    title: string;
    description: string;
    position: string;
    required_qualifications: string;
    duration: string;
    location: string;
    numberOfPositions: number;
    salary: number;
    applicationProcess: string;
    application_deadline: Date;
    additionalInfo?: string;
}