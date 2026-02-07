// Creating a global type for Loan application 

export interface LoanApp{
    id: string; 
    
    applicant: {
        applicantName: string;
        annualIncome: number; 
        employmentStatus: string; 
        creditScore: number; 
        applicationDate: string; 
    }; 
    
    loan: {
        loanAmount: number, 
        loanPurpose: string,  
    }; 

    status: 'pending' | 'under-review' | 'approved' | 'rejected'; 
    
    statusHistory: Array<{ status: string; timestamp: string, notes:string }>


}