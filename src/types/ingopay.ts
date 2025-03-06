export interface RecipientInformation {
  first_name: string;
  last_name: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  zip_code: string;
  email_address: string;
  phone_number: string;
  mobile_number: string;
}

export interface FormData {
  participant_unique_id1: string;
  participant_unique_id2: string;
  host_uri: string;
  recipient_information: RecipientInformation;
}
