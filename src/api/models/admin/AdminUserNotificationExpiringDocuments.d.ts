export default interface AdminUserNotificationExpiringDocuments {
        exp_documents :number,
        cases:Array<{
            belongs_to: string,
              document_link: string,
              doc_type: string,
              expiry_date: string,
              last_updated: string
        }>
        
    }
    