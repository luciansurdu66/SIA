export interface InternshipModel {
    id: number;
    company_id: number;
    job_title: string;
    job_description: string;
    position: string;
    required_qualifications: string;
    duration: string;
    period: string;
    location: string;
    number_of_positions: number;
    salary: number;
    application_process: string;
    application_deadline: string;
    additional_info?: string;
}