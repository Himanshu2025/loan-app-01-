import {type LoanApp }  from '@/types/loan'

/**
 *  Fetching the loanApplication data by ID 
 *  Like a real db call 
 */

export async function getLoanApp(id: string): Promise<LoanApp> {
    // Simulating real API delay 
    await new Promise( resolve => setTimeout(resolve, 300)); 

    return {
        id, 
        applicant: { 
        applicantName: "Sarah Mitchell",
        annualIncome: 95000, 
        employmentStatus: "full-time", 
        creditScore: 70, 
        applicationDate: "05-02-2026" 
        }, 
        loan: {
            loanAmount: 300000, 
            loanPurpose: "Home purchase", 
        }, 
        status: "pending",
        statusHistory: [
            { status: "pending", timestamp: "2026-02-06 10:30", notes: "application submitted" }
        ]
    }; 
}