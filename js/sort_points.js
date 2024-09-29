// 1) Alt+down = make formate of code

// 2)rcc = creates a structure of clsss components

// 3.) let tr = document.querySelectorAll("tbody tr"); This will select all the tr which are inside the tbody

// 4.) let arr = [1,2,3,4,5,6];
// arrr = [1,2,3,4,5,6]
// let =[];
// newarr = [...arr,...arrr]
// console.log(newarr)
//  [a,,,,f] = arr;
// console.log(a,f)

// 5.) rest operator It takes an arguments and push it into an array and returns the new array like c here is a one array which is holding the values from 3 to 6
// function sum(a,b,...c){
// console.log(a+b,c)
// }
// sum(1,2,3,4,5,6)

// 6.) The spread operator is opposite of the rest it spreads all the value of the array and returns that values as indexes bise.
// function dosum(a,b,c,d,e,f){
// console.log(a+b+c+d+e+f)
// }
// let arr = [1,2,3,4,5,6]
// dosum(...arr)

// 7.) with the use of new Date function if wee uses tolocaleDateString so it will give us todays full date with year and month or tolocaleTimeString will give us today's full time with hour minute seconds and am pm as well. and if we use tolocaleString so it will give us full date amd time.
// const newdate = new Date().toLocaleTimeString()/ toLocaleDateString()
// console.log(newdate)
// const newdate1 = new Date().toLocaleString()
// console.log(newdate1)


// .8) Array.From() method returns an array from any object with a length property.
// let children = Array.from(e.target.parentNode.parentNode.children);

// .9.) Date(2020 year,2Month,5Din,14Hours)

// 1. 3rd smallest number from an array.. 2.remove duplicates..3. find duplicate characters in two string..example- ramkrashna,ramjane= rama.
// 4.Write a program to create the email by using the first four and last three charactrer of the string. 


// .10.).. This is about the How to create select dropdown dynamically by javascrit.
// let td3 = document.createElement("td");
// let select = document.createElement("select");
// let option3 = document.createElement("option");
// option3.text = "Jabalpur";
// option3.value = "ja";
// select.append(option,option1,option2,option3);
// td3.appendChild(select)

// .11.).. For focusing or showing active input filed we use focus() function.
// event.target.parentElement.previousElementSibling.focus();

// 12.).The main difference between foreach and map function is that foreach dosen't return anything and map function returns an array.

//  .13.). let a=[];let b=[]; console.log(a===b) => "false";

// .14.)let todos =[]; let a = todos; todos.push("1"); console.log(a===todos,a,todos)=>"true";

// .15) This is for generating new different id's for anything it's fully dynamic
// id: parseInt(new Date().getTime().toString()),

// .16) We can apply css in react by using ternory operator like this 
// <h1 style={obj}>{ok?a:b}</h1>
  
// .17) git rm --cached <file_path>       we can delete node module file while staging react project on github by following this command git rm -rf node_modules


// .18) WINDOW.SCROLLtO(0 ,0) function prevents the by default scroll of the react components by defining the window.scrollTo(0,0) We can show the top phase of the page or components. used in bridgefix website current openings more details section.

// .19)  overflow-y: scroll;overflow-x: hidden;height: 550px; This css properties enables the scroll bar on the components where we want to add scrollbar. The height property allows to set the height of the components like how much part of the components we want to show in our screen without scrolling 


// .20) For killing the all processess on the heroku server when we get a error like too many users then we will run the commands like
// heroku pg:ps
// heroku pg:killall


// .21) For killing the terminal processes
//lsof -i :8000   // this will give us all the process id's which is PID then run 
//kill PID PID PID 

// by running the above command if the process is not getting killd then we will run 
// kill -9 PID 


// .22) For excluding the some properties from the  array of objects we can use this below rest operator where inside the ...rest variable we will have our required properties and rest of the keys which we have declared before the ...rest they will get excluded.
// const mappedData = filteredWorkOrders.map((item) => {
//       const { tanentId,timeNeeded,updatedRemainingTime,workNote,isManual,incomplete,type, ...rest } = item;
//       return rest as WorkorderResponse;
//     });  
    
    // If we wanted to have this excluded keys so we can store them by destructuring like below 
    // const excluded_Data = {tanentId,timeNeeded,updatedRemainingTime,workNote,isManual,incomplete,type,} 
    
    
   
   
// .26) To clone a specific branch from a Git repository, you can use the -b (or --branch) option followed by the branch name. Here is the general syntax:

 
// git clone -b <branch_name> <repository_url></repository_url>


   // .25) Revert your last commit locally:


// git reset HEAD~1 --soft
// This will undo your last commit, but keep the changes in your working directory.
// Take a pull from the remote development branch:


// git pull origin development

// This will pull the latest changes from the remote development branch and merge them into your local development branch.
// Resolve any merge conflicts: If there are any conflicts between your local changes and the remote changes, you'll need to resolve them manually. Open the conflicting files, decide which changes to keep, and remove the conflict markers.

// Add the resolved files:


// git add .
// This will stage the resolved files for the next commit.
// Commit the changes:


// git commit -m "Merge remote changes with local changes"
// This will create a new commit with the merged changes.
// Push your changes to the remote development branch:


// git push origin development
// This will push your local development branch to the remote development branch.
// By following these steps, you'll be able to revert your last commit, pull the latest changes from the remote development branch, resolve any merge conflicts, and then push your changes to the remote development branch without any data loss.



// git )  For knowing the all local and server branches in git can use the below command = git branch -a 



// .26) const myObject = {
//key1: 'value1',
//key2: 'value2'
//};

//Object.freeze(myObject);

//myObject.key1 = 'new value'; // This change will not take effect

//console.log(myObject); // Output: { key1: 'value1', key2: 'value2'}


// .27) Git Commands

//.1) For pushing the main branch changes into the new branch without affecting the main branch on the server we will create the new branch

// git checkout -b name_0f_new_branch

// now simply we will run git add commit and origin push new_branch this will push our code into the new branch


// .28) For calculating the time of the code like how much time the code is taking for getting executed we can use below functions

// console.timeLog()
// const CheckTime = (x)=>{
//     for (let index = 0; index < x; index++) {
//         const element =  index ;
//     }
// }
// console.time()
// console.log(CheckTime(5));
// console.timeEnd()


// .29) name has already been declared

// var name = "test1";
// let name = "test2";
// console.log(name);

// state full and state less and control and uncontrol /Profiling/ lazy loading / event bubling /  React's synthetic event system.







// borrower index.ts = 

// import React, { useEffect, useRef, useState } from 'react';
// import FormProvider, { RHFTextField } from '../../components/hook-form';
// import {
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   Link,
//   Box,
//   Grid,
//   IconButton,
//   InputAdornment,
//   Modal,
//   Avatar,
//   MenuItem,
//   Snackbar,
//   AlertColor,
// } from '@mui/material';
// import { Stack, styled } from '@mui/system';
// import DashboardLayout from 'src/layouts/dashboard/DashboardLayout';
// import ClearIcon from '@mui/icons-material/Clear';
// import router from 'next/router';
// import * as Yup from 'yup';
// import { SubmitHandler } from 'react-hook-form';
// import { Controller, useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { postBorrowers, getBorrowers, updateBorrower } from 'src/redux/slices/borrower';
// import { generateOtp } from 'src/redux/slices/vault';
// import { verifyOtp } from 'src/redux/slices/vault';
// // import { useDispatch } from 'react-redux';
// // import { useDispatch } from 'src/redux/store';
// import { useSorobanReact } from '@soroban-react/core';

// interface CreateBorrower {
//   first_name: string;
//   last_name: string;
//   email: string;
//   country: string;
//   phone_number: string;
//   company_relation: string;
//   stellar_address: string;
// }

// const createBorrowerData: CreateBorrower = {
//   first_name: '',
//   last_name: '',
//   email: '',
//   country: '',
//   phone_number: '',
//   company_relation: '',
//   stellar_address: '',
// };

// import { getCountries } from 'src/redux/slices/countries';
// import { dispatch, useDispatch, useSelector } from 'src/redux/store';
// // import { getVaults, getVaultsTxHistory } from "src/redux/slices/vault";
// import MuiAlert from '@mui/material/Alert';

// export default function index() {
//   const [step, setStep] = useState(1);
//   const dispatch = useDispatch();
//   const handleApplyClick = () => {
//     setStep(2);
//   };
//   const [newBorrowerId, setNewBorrowerId] = useState('');
//    // const { vaults, vaultTxHistory } = useSelector((state) => state.vaults);
//   const { borrower } = useSelector((state) => state.borrower);
//   const { address } = useSorobanReact();

//   const getBorrowerDetails = () => {
//     try {
//       let filterById = borrower?.data?.find((e: any) => {
//          return e.stellar_address.toString() === address;
//        });
 
//       if (filterById !== undefined) {
//           router.push('/borrower/vaults');
//       } else {
 
//          router.push('/borrower');
//       }
//     } catch (error) {
//       console.log('🚀 ~ getVaultDetails ~ error', error);
//     }
//   };

//   useEffect(() => {
//     if (borrower?.data) {
//       getBorrowerDetails();
//     } else {
//       dispatch(getBorrowers());
//       getBorrowerDetails();
//     }
//   }, [address, borrower,newBorrowerId]);

//   return (
//     <>
//       {step === 1 && (
//         <RootStyle>
//           <CardContent
//             sx={{
//               color: 'grey.800',
//               p: { md: 0 },
//               pl: { md: 5 },
//               height: '338px',
//               width: '50%', // Set width to 50%
//             }}
//           >
//             <Typography gutterBottom sx={{ pt: 7, fontSize: '24px' }}>
//               Apply as a Borrower
//             </Typography>

//             <Typography variant="body2" sx={{ pt: 3, pb: { xs: 3, xl: 5 }, mx: 'auto' }}>
//               Please apply for a borrower status to have access to Trilobyte's network of Investors.
//             </Typography>

//             <Button
//               variant="contained"
//               sx={{ mt: 4, px: 3, backgroundColor: '#078DEE' }}
//               onClick={handleApplyClick}
//             >
//               Apply
//             </Button>
//           </CardContent>
//         </RootStyle>
//       )}
//       {step === 2 && (
//         <ApplyForm
//           onClose={() => setStep(1)}
//           setNewBorrowerId={setNewBorrowerId}
//           onNext={() => setStep(3)}
//           onBack={() => setStep(1)}
//         />
//       )}
//       {step === 3 && (
//         <AdditionalDetailsForm
//           onBack={() => setStep(2)}
//           newBorrowerId={newBorrowerId}
//           address={address || ''}
//         />
//       )}{' '}
//       {/* {step === 3 && <AdditionalDetailsForm onBack={() => setStep(2)} />} */}
//       {/* {step === 4 && <MobileOtpForm onClose={() => setStep(3)} onNext={() => setStep(5)} onBack={() => setStep(3)} />}
//       {step === 5 && <AdditionalDetailsForm onBack={() => setStep(3)} />} */}
//     </>
//   );
// }
// index.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// interface OtpFormProps {
//   onClose: () => void;
//   onNext: () => void;
//   onBack: () => void;
// }

// interface ApplyFormProps {
//   onNext: () => void;
//   onBack: () => void;
//   onClose: () => void;
//   setNewBorrowerId: any;
// }

// interface companyDetailsProps {
//   onBack: () => void;
// }

// interface MobileOtpForm {
//   onClose: () => void;
//   onNext: () => void;
//   onBack: () => void;
// }

// const styles = {
//   detailsForm: {
//     width: '55%',
//     boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.25)',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     marginTop: '12px',
//     margin: '18px',
//     borderRadius: '15px',
//     paddingTop: '0',
//     '& .css-1c05bks-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
//       width: '100px',
//       height: '100px',
//       color: 'red',
//     },
//   },
//   gridItem: {
//     '& .css-1jcdwbv-MuiFormControl-root-MuiTextField-root': {
//       marginY: 0,
//     },
//     '& .css-rn7bkk-MuiFormControl-root-MuiTextField-root': {
//       marginY: 0,
//     },
//     '& .css-1c05bks-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
//       width: '100px',
//       height: '100px',
//       color: 'red',
//     },
//   },

//   Headings: {
//     fontFamily: 'Poppins',
//     fontSize: '24px',
//     fontWeight: 600,
//     lineHeight: 1.5,
//     letterSpacing: '0em',
//     textAlign: 'left',
//     color: '#212B36',
//   },
//   subHEadings: {
//     fontFamily: 'Poppins',
//     fontSize: '14px',
//     fontWeight: 400,
//     lineHeight: 1.5,
//     letterSpacing: '0em',
//     textAlign: 'center',
//     color: '#212B36',
//   },
//   TextCss: {
//     fontFamily: 'Poppins',
//     fontSize: '13px',
//     fontWeight: 300,
//     // lineHeight: "20px",
//     letterSpacing: '0em',
//     textAlign: 'left',
//     color: '#646464',
//   },
//   otpForm: {
//     width: '55%',
//     boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.25)',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     marginTop: '12px',
//     margin: '18px',
//     borderRadius: '15px',
//     paddingTop: '0',
//   },
//   CompanyDetailsCss: {
//     width: '55%',
//     boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.25)',
//     textAlign: 'center',
//     backgroundColor: '#fff',
//     // marginTop: '12px',
//     margin: '18px',
//     borderRadius: '15px',
//     paddingRight: '24px',
//   },
//   '& .css-rn7bkk-MuiFormControl-root-MuiTextField-root': {
//     marginY: 0,
//   },
//   ModalCss: {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '55%',
//     borderRadius: '10px',
//     transform: 'translate(-50%, -50%)',
//     width: '400px',
//     height: '500px',
//     bgcolor: 'background.paper',
//     boxShadow: '0px 0px 9px 0px #00000040',
//     // p: 4,
//     popupHeadingCss: {
//       fontFamily: 'Poppins',
//       fontSize: '16px',
//       fontWeight: 400,
//       lineHeight: '35px',
//       letterSpacing: '0em',
//       color: '#3C3C3C',
//     },
//     popupTextCss: {
//       fontFamily: 'Poppins',
//       fontSize: '12px',
//       fontWeight: 300,
//       lineHeight: '21px',
//       letterSpacing: '0em',
//       color: '#3C3C3C',
//     },
//   },
// };

// const RootStyle = styled(Card)(({ theme }) => ({
//   boxShadow: '0px 0px 9px rgba(0, 0, 0, 0.25)',
//   textAlign: 'center',
//   backgroundColor: '#fff',
//   marginTop: '12px',
//   margin: '18px',
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//     textAlign: 'left',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// }));

// const ApplyForm: React.FC<ApplyFormProps> = ({ onNext, onClose, onBack, setNewBorrowerId }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     country: '',
//     phoneNumber: '',
//     companyRelation: '',
//     countryIsoName: '',
//   });
//   const { countries } = useSelector((state) => state.countries);
//   const dispatch = useDispatch();

//   const [openToast, setOpenToast] = useState(false);
//   const [otp, setOtp] = useState('');
//   const handleOpen = () => setOpen(true);
//   const openMobileModal = () => setOpen(true);

//   const [isMobileModal, setMobileModal] = useState(false);
//   const [countryCode, setCountryCode] = useState('');
//   const [newBorrowerId, setBorrowerId] = useState('');

//   const [userMessage, setUserMessage] = useState('');
//   const [snackBar, setSnackBar] = useState(false);
//   const [severity, setSeverity] = useState<AlertColor>('error');
//   const [open, setOpen] = useState(false);

//   const handlePopupClose = () => {
//     setOpenToast(false);
//     setSnackBar(false);
//   };

//    const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === 'country') {
//       // Update country code and clear phoneNumber when country changes
//       const selectedCountry = countries.find((country: { code: string }) => country.code === value);
//       setCountryCode(selectedCountry?.code);
//       setFormData((prevData) => ({
//         ...prevData,
//         country: value,
//         countryIsoName: selectedCountry?.iso,
//         // phoneNumber: selectedCountry ? +${selectedCountry.code} : '',
//       }));
//     } else {
//       setFormData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };
//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<CreateBorrower>({});
//   const onSubmit: SubmitHandler<CreateBorrower> = async () => {
//     let data = {
//       phone_number: `91${formData?.phoneNumber}`,
//       email: formData?.email,
//     };
//     if (!address) {
//       setSnackBar(true);
//       setSeverity('error');
//       setUserMessage('Connect the wallet address');
//     } else {
//       try {
//         let response = await dispatch(generateOtp(data));
//         if (response?.status === 200) {
//           setMobileModal(true);
//           openMobileModal();
//           handleOpen();
//           setSnackBar(true);
//           setSeverity('success');
//           setUserMessage('OTP sent successfully!');
//         }
//       } catch (error) {
//         console.log('🚀 ~ generatOtp ~ error:', error);
//         setSnackBar(true);
//         setSeverity('error');
//         setUserMessage('Error: ' + error.message);
//       }
//     }
//   };
//   // Verification successful.'
//   const verifyMobileOtp = async () => {
//     const verifyOtpData = {
//       phone_number: `91${formData?.phoneNumber}`,
//       code: otp,
//     };
//     // setMobileModal(true);
//     // openMobileModal();
//     // onNext();
//     try {
//       let response = await dispatch(verifyOtp(verifyOtpData));
//       if (response?.status === 200) {
//         const postBorrower = await postBorrowerData({ ...formData });
//        }
//     } catch (error) {
//       console.log('🚀 ~ generatOtp ~ error:', error);
//     }
//   };

//   const handleVerify = () => {
//     setMobileModal(true);
//     openMobileModal();
//     // onNext()
//   };
//   // const dispatch = useDispatch();
//   const { address } = useSorobanReact();

//   const postBorrowerData = async (data: any) => {
//     let obj = {
//       first_name: data.firstName,
//       last_name: data.lastName,
//       email: data.email,
//       country: data?.countryIsoName,
//       phone_number: `${countryCode}${data.phoneNumber}`,
//       company_relation: data.companyRelation,
//       stellar_address: address,
//     };

//     try {
//       let response = await dispatch(postBorrowers(obj));
//       if (response?.status === 200) {
//         setNewBorrowerId(response?.data);
//         setSnackBar(true);
//         setSeverity('success');
//         setUserMessage('OTP verified successfully!');
//         if (response?.data?.message !== 'Address already exist use a different stellar_address') {
//           onNext();
//         } else {
//           alert('Address already exist use a different stellar_address');
//         }
//        }
//     } catch (error) {
//       console.log('🚀 ~ file: AuthSignupForm.tsx:366 ~ postBorrowerData ~ error:', error);
//     }
//   };

//   // const generatOtp = async (phone_number: string, email: any) => {
//   //   let data = {
//   //     phone_number,
//   //     email
//   //   }
//   //    // let data = {
//   //   //   phone_number: '919131445742',
//   //   //   email: 'divya.rang@imentus.com',
//   //   // };
//   //   // try {
//   //   //   let response = await dispatch(generateOtp(data));
//   //   //   if (response?.status === 200) {
//   //   //     console.log('Otp generate Successful');
//   //   //   }
//   //   // } catch (error) {
//   //   //   console.log('🚀 ~ generatOtp ~ error:', error);
//   //   // }
//   // };

//   const inputRefs = Array(6)
//     .fill(null)
//     .map(() => useRef<HTMLInputElement | null>(null));
//   const handleInputChange1 = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     index: number
//   ) => {
//     const { value } = e.target;
//     setOtp((prevOtp: any) => {
//       const newOtp = prevOtp.substring(0, index) + value + prevOtp.substring(index + 1);
//       return newOtp;
//     });

//     if (inputRefs[index + 1]) {
//       inputRefs[index + 1].current?.focus();
//     }
//   };

//   const customOTPInput = (
//     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
//       {Array(6)
//         .fill('')
//         .map((_, index) => (
//           <TextField
//             key={index}
//             name={`otp[${index}]`}
//             label=""
//             onChange={(e) => handleInputChange1(e, index)}
//             inputRef={inputRefs[index]}
//             sx={{
//               width: '40px',
//               // height: '40px',
//               fontSize: '1.5rem',
//               textAlign: 'center',
//               '& .css-5apaj5-MuiInputBase-root-MuiOutlinedInput-root': {
//                 background: '#E7E7E7',
//               },
//             }}
//           />
//         ))}
//     </div>
//   );

//   const handleContinue = async () => {
//     let data = {
//       phone_number: `91${formData?.phoneNumber}`,
//       email: formData?.email,
//     };
//     // try {
//     //   let response = await dispatch(generateOtp(data));
//     //   if (response?.status === 200) {
//     // setMobileModal(true);
//     // openMobileModal();
//     //     handleOpen();
//     //     setSnackBar(true);
//     //     setSeverity('success');
//     //     setUserMessage('OTP sent successfully!');
//     //   }
//     // } catch (error) {
//     //   console.log('🚀 ~ generatOtp ~ error:', error);
//     //   setSnackBar(true);
//     //   setSeverity('error');
//     //   setUserMessage('Error: ' + error.message);
//     // }
//     setMobileModal(true);
//     openMobileModal();
//     handleOpen();
//   };

//   useEffect(() => {
//     dispatch(getCountries());
//   }, []);

//   return (
//     <>
//       <Snackbar
//         open={snackBar}
//         autoHideDuration={6000}
//         onClose={handlePopupClose}
//         // message=""
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         // action={action}
//         sx={{ top: '34px' }}
//       >
//         <MuiAlert onClose={handlePopupClose} severity={severity} sx={{ width: '100%' }}>
//           {userMessage}
//         </MuiAlert>
//       </Snackbar>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid sx={styles.detailsForm}>
//           <CardContent sx={{ textAlign: 'left' }}>
//             <Typography variant="h6" sx={{ ...styles.Headings, textAlign: 'left' }}>
//               Fill in your details
//             </Typography>
//             <Typography sx={{ ...styles.TextCss, mt: 1, mb: 2 }}>
//               Since you are opening the account, we need some information about you
//             </Typography>

//             <Grid container spacing={2} sx={styles.gridItem}>
//               <Grid item xs={6} sx={styles.gridItem}>
//                 <TextField
//                   label="First Name"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={6} sx={styles.gridItem}>
//                 <TextField
//                   label="Last Name"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sx={styles.gridItem}>
//                 <TextField
//                   label="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   fullWidth
//                   margin="normal"
//                   required
//                   sx={{ padding: 0 }}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Country"
//                   name="country"
//                   value={formData?.country}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   margin="normal"
//                   select
//                   SelectProps={{
//                     MenuProps: {
//                       PaperProps: {
//                         style: {
//                           width: '275px',
//                           maxHeight: '250px',
//                         },
//                       },
//                     },
//                   }}
//                 >
//                   {countries.map((country: { iso: string; code: string; name: string }) => (
//                     <MenuItem key={country.code} value={country.code}>
//                       {country.name}
//                     </MenuItem>
//                   ))}
//                 </TextField>
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Phone Number"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   margin="normal"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         {countryCode ? `+${countryCode}` : '+91'}
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Company Relation"
//                   name="companyRelation"
//                   value={formData.companyRelation}
//                   onChange={handleChange}
//                   fullWidth
//                   required
//                   margin="normal"
//                   select
//                 >
//                   <MenuItem value="partner">partner</MenuItem>
//                   {/* <MenuItem value="option2">Option 2</MenuItem>             */}
//                 </TextField>
//               </Grid>
//             </Grid>

//             <Box mt={2}>
//               {/* <Button variant="contained" color="primary" fullWidth onClick={() => handleContinue()}>
//               Continue
//             </Button> */}
//               <Button variant="contained" color="primary" fullWidth type="submit">
//                 Continue
//               </Button>
//             </Box>
//             <Grid item xs={12}>
//               <Typography
//                 variant="body2"
//                 sx={{ fontSize: '11px', marginTop: '8px', textAlign: 'center' }}
//               >
//                 <Link onClick={onBack} sx={{ cursor: 'pointer' }}>
//                   Go back
//                 </Link>
//               </Typography>
//             </Grid>
//           </CardContent>

//           {/* <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         sx={{
//           '& .MuiBackdrop-root': { backgroundColor: '#00000080' },
//         }}
//       >
//         <Grid sx={styles.ModalCss}>
//           <CardContent>
//             <Box display="flex" justifyContent="end">
//               <IconButton sx={{ textAlign: 'end' }} onClick={onClose} color="inherit">
//                 <ClearIcon />
//               </IconButton>
//             </Box>
//             <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={2}>
//               <Avatar
//                 sx={{ width: '200px', height: '65px' }}
//                 src="/logo/TrilobyteLogo.png"
//                 alt="Your Logo"
//               />
//             </Box>
//             <Typography sx={styles.subHEadings} mb={3}>
//               Enter the OTP received on the email
//             </Typography>
//             <Typography sx={{ ...styles.TextCss, textAlign: 'center' }} mt={2}>
//               Check your spam folder and the spelling of your email address
//             </Typography>

//             <Stack mt={3}>{customOTPInput}</Stack>

//             <Typography variant="body2" mt={3} sx={{ fontSize: '11px', textAlign: 'center' }}>
//               Code hasn't arrived? <Link>You can retry in 00:15</Link>
//             </Typography>
//             <Box mt={4}>
//               <Button variant="contained" color="primary" onClick={handleVerify} fullWidth>
//                 Verify email address
//               </Button>
//             </Box>
//           </CardContent>
//         </Grid>
//       </Modal> */}

//           {isMobileModal && (
//             <Modal
//               open={open}
//               onClose={handleClose}
//               aria-labelledby="modal-modal-title"
//               aria-describedby="modal-modal-description"
//               sx={{
//                 '& .MuiBackdrop-root': { backgroundColor: '#00000080' },
//               }}
//             >
//               <Grid sx={styles.ModalCss}>
//                 <CardContent>
//                   <Box display="flex" justifyContent="end">
//                     <IconButton sx={{ textAlign: 'end' }} onClick={onClose} color="inherit">
//                       <ClearIcon />
//                     </IconButton>
//                   </Box>
//                   <Box sx={{ display: 'flex', justifyContent: 'center' }} mb={2}>
//                     <Avatar
//                       sx={{ width: '200px', height: '65px' }}
//                       src="/logo/TrilobyteLogo.png"
//                       alt="Your Logo"
//                     />
//                   </Box>
//                   <Typography sx={styles.subHEadings} mb={3}>
//                     Enter the OTP received on mobile number
//                   </Typography>
//                   {/* <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography> */}

//                   <Stack mt={3}>{customOTPInput}</Stack>

//                   <Typography variant="body2" mt={3} sx={{ fontSize: '11px', textAlign: 'center' }}>
//                     Code hasn't arrived? <Link>You can retry in 00:15</Link>
//                   </Typography>
//                   <Box mt={4}>
//                     <Button variant="contained" color="primary" onClick={verifyMobileOtp} fullWidth>
//                       Verify mobile number
//                     </Button>
//                   </Box>
//                   {/* <Grid item xs={12}>
//               <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px",textAlign:"center" }}>
//                 <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
//               </Typography>
//             </Grid> */}
//                 </CardContent>
//               </Grid>
//             </Modal>
//           )}
//         </Grid>
//       </form>
//     </>
//   );
// };

// interface CompanyDetailsProps {
//   onBack: () => void;
//   address: string;
//   newBorrowerId: string;
// }

// interface AdditionalFormData {
//   logo: string;
//   business_name: string;
//   country_of_incorporation: string;
//   date_of_incorporation: string;
//   registration_number: string;
//   legal_form: string;
//   borrowerId: string;
// }

// const validationSchema = Yup.object().shape({
//   business_name: Yup.string().required('Registered Business Name is required'),
//   country_of_incorporation: Yup.string().required('Country of Incorporation is required'),
//   legal_form: Yup.string().required('Legal form is required'),
//   date_of_incorporation: Yup.string().required('Date of Incorporation is required'),
//   registration_number: Yup.string().required('Registration number is required'),
// });

// const AdditionalDetailsForm: React.FC<CompanyDetailsProps> = ({
//   onBack,
//   address,
//   newBorrowerId,
// }) => {
//   const [open, setOpen] = React.useState(false);
//   // const [borrowerId, setBorrowerId] = useState('');
//   // const { borrower } = useSelector((state: any) => state.borrower);
//   // const { address } = useSorobanReact();
//   const [additionalFormData, setAdditionalFormData] = useState<AdditionalFormData>({
//     borrowerId: newBorrowerId || '',
//     logo: '',
//     business_name: '',
//     country_of_incorporation: '',
//     date_of_incorporation: '',
//     registration_number: '',
//     legal_form: '',
//   });
//   // const { borrower } = useSelector((state) => state.borrower);
//   // // const { address } = useSorobanReact();

//   // const getBorrowerDetails = () => {
//   //   try {
//   //     let filterById = borrower?.data?.find((e: any) => {
//   //       //   // if (vaultId) {
//   //       //   //   console.log("🚀 ~ filterById ~ vaultId:", vaultId)
//   //       return e.stellar_address.toString() === address;
//   //       //   // }
//   //     });
//   //     console.log("🚀 ~ filterById ~ filterById:", filterById)

//   //     if (filterById !== undefined) {
//   //       console.log("🚀 ~ filterById ~ filterById if :", filterById)
//   //        router.push('/borrower/vaults');
//   //     } else {
//   //       console.log("🚀 ~ filterById ~ filterById else :", filterById)

//   //        router.push('/borrower');
//   //     }
//   //   } catch (error) {
//   //     console.log('🚀 ~ getVaultDetails ~ error', error);
//   //   }
//   // };

//   // useEffect(() => {
    
//   //     dispatch(getBorrowers());
//   //     getBorrowerDetails();
    
//   // }, [address, borrower,newBorrowerId]);


//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleDone = () => {
//     router.push('/borrower/vaults/');
//   };

//   const {
//     control,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<AdditionalFormData>({
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAdditionalFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleLogoSelect = (logo: string) => {
//     setAdditionalFormData((prevData) => ({
//       ...prevData,
//       logo,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const logoUrl = URL.createObjectURL(file);
//       handleLogoSelect(logoUrl);
//     }
//   };

//   // const onSubmit: SubmitHandler<AdditionalFormData> = async () => {
//   //   try {
//   //     let response = await dispatch(updateBorrower(newBorrowerId, additionalFormData));
//   //     if (response?.status === 200) {
//   //        handleOpen();
//   //     }
//   //   } catch (error) {
//   //     console.log('🚀 ~ file: AuthSignupForm.tsx:366 ~ postBorrowerData ~ error:', error);
//   //   }
//   // };

//   const onSubmit: SubmitHandler<AdditionalFormData> = async () => {
//     try {
//       let response = await dispatch(updateBorrower(newBorrowerId, additionalFormData));
//       if (response?.status === 200) {
//         handleOpen();
//          await fetchAndRedirectBorrower();
//       }
//     } catch (error) {
//       console.log('🚀 ~ file: AuthSignupForm.tsx:366 ~ postBorrowerData ~ error:', error);
//     }
//   };

//   const fetchAndRedirectBorrower = async () => {
//     try {
//       await dispatch(getBorrowers());
//       getBorrowerDetails();
//     } catch (error) {
//       console.log('🚀 ~ getVaultDetails ~ error', error);
//     }
//   };
//   const { borrower } = useSelector((state) => state.borrower);

//   const getBorrowerDetails = () => {
//     try {
//       let filterById = borrower?.data?.find((e: any) => {
//         return e.stellar_address.toString() === address;
//       });
  
//       if (filterById !== undefined) {
//          router.push('/borrower/vaults');
//       } else {
//          router.push('/borrower');
//       }
//     } catch (error) {
//       console.log('🚀 ~ getVaultDetails ~ error', error);
//     }
//   };



//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Grid container spacing={3} sx={styles.CompanyDetailsCss}>
//           <Grid item xs={12}>
//             <Typography variant="h6" sx={{ textAlign: 'left' }}>
//               Company Details
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Typography fontSize={14} textAlign="start">
//               Provide additional information about your company.
//             </Typography>
//           </Grid>
//           {/* <Grid item xs={4} sx={styles.gridItem}>
//             <TextField
//               label="Select Logo"
//               name="logo"
//               value={additionalFormData.logo}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Button onClick={() => handleLogoSelect('')}>
//                       Select Logo
//                     </Button>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid> */}
//           <Grid item xs={4} sx={styles.gridItem}>
//             <TextField
//               label="Select Logo"
//               name="logo"
//               value={additionalFormData.logo}
//               onChange={handleChange}
//               fullWidth
//               margin="normal"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Button component="label">
//                       Select Logo
//                       <input
//                         type="file"
//                         accept="image/*"
//                         style={{ display: 'none' }}
//                         onChange={handleFileChange}
//                       />
//                     </Button>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             {additionalFormData.logo && (
//               <img
//                 src={additionalFormData.logo}
//                 alt="Selected Logo"
//                 style={{ marginTop: '10px', maxWidth: '100%' }}
//               />
//             )}
//           </Grid>

//           <Grid item xs={8} sx={styles.gridItem}>
//             <Controller
//               name="business_name"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   label="Registered Business Name"
//                   {...field}
//                   fullWidth
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                   error={!!errors.business_name}
//                   helperText={String(errors.business_name?.message || '')}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Controller
//               name="country_of_incorporation"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   sx={{ textAlign: 'left' }}
//                   label="Country of Incorporation"
//                   {...field}
//                   fullWidth
//                   margin="normal"
//                   select
//                   onChange={handleChange}
//                   required
//                   error={!!errors.country_of_incorporation}
//                   helperText={String(errors.country_of_incorporation?.message || '')}
//                 >
//                   <MenuItem value="option1">Option 1</MenuItem>
//                   <MenuItem value="option2">Option 2</MenuItem>
//                 </TextField>
//               )}
//             />
//           </Grid>
//           {/* Legal form Selection Field */}
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Controller
//               name="legal_form"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   sx={{ textAlign: 'left' }}
//                   label="Legal form"
//                   {...field}
//                   fullWidth
//                   margin="normal"
//                   onChange={handleChange}
//                   select
//                   required
//                   error={!!errors.legal_form}
//                   helperText={String(errors.legal_form?.message || '')}
//                 >
//                   <MenuItem value="option1" sx={{ textAlign: 'left' }}>
//                     Option 1
//                   </MenuItem>
//                   <MenuItem value="option2" sx={{ textAlign: 'left' }}>
//                     {' '}
//                     Option 2
//                   </MenuItem>
//                 </TextField>
//               )}
//             />
//           </Grid>
//           {/* Date of Incorporation Field */}
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Controller
//               name="date_of_incorporation"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   label="Date of Incorporation"
//                   {...field}
//                   fullWidth
//                   onChange={handleChange}
//                   margin="normal"
//                   required
//                   error={!!errors.date_of_incorporation}
//                   helperText={String(errors.date_of_incorporation?.message || '')}
//                 />
//               )}
//             />
//           </Grid>
//           {/* Registration number Field */}
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Controller
//               name="registration_number"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   label="Registration number"
//                   {...field}
//                   fullWidth
//                   margin="normal"
//                   onChange={handleChange}
//                   required
//                   error={!!errors.registration_number}
//                   helperText={String(errors.registration_number?.message || '')}
//                 />
//               )}
//             />
//           </Grid>
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Box>
//               <Button variant="contained" color="primary" fullWidth type="submit">
//                 Submit
//               </Button>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sx={styles.gridItem}>
//             <Typography
//               variant="body2"
//               sx={{ fontSize: '11px', marginBottom: '16px', marginTop: '-14px' }}
//             >
//               <Link onClick={onBack} sx={{ cursor: 'pointer' }}>
//                 Go back
//               </Link>
//             </Typography>
//           </Grid>
//         </Grid>
//       </form>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         sx={{
//           '& .MuiBackdrop-root': { backgroundColor: 'transparent' },
//         }}
//       >
//         <Box sx={styles.ModalCss}>
//           <Grid sx={{ display: 'flex', justifyContent: 'center', paddingTop: '65px' }}>
//             <Avatar
//               src="/logo/Successfull_Investment_Image.png"
//               variant="square"
//               sx={{ textAlign: 'center' }}
//             />
//           </Grid>
//           <Grid sx={{ textAlign: 'center' }}>
//             <Grid item xs={12} mb={2} mt={4}>
//               <Typography sx={styles.ModalCss.popupHeadingCss}>Thanks for registering!.</Typography>
//             </Grid>

//             <Grid item xs={12} mb={2} mt={4}>
//               <Typography sx={styles.ModalCss.popupTextCss}>
//                 We will notify you by email when your account has been approved.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} mb={2} mt={6}>
//               <Button variant="contained" color="primary" onClick={handleDone}>
//                 Done
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Modal>
//     </>
//   );
// };

// // const EmailOtpForm: React.FC<OtpFormProps> = ({ onClose, onNext, onBack }) => {
// //   const [open, setOpen] = React.useState(false);
// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);
// //   const [otp, setOtp] = useState('');

// //   const handleVerify = () => {
// //     // logic for verifying OTP
// //     onNext()
// //   };

// //   const inputRefs = Array(6).fill(null).map(() => useRef<HTMLInputElement | null>(null));
// //   console.log("🚀 ~ file: index.tsx:628 ~ inputRefs:", inputRefs, otp)
// //   const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
// //     const { value } = e.target;
// //     setOtp((prevOtp: any) => {
// //       const newOtp = prevOtp.substring(0, index) + value + prevOtp.substring(index + 1);
// //       return newOtp;
// //     });

// //     if (inputRefs[index + 1]) {
// //       inputRefs[index + 1].current?.focus();
// //     }
// //   };

// //   const customOTPInput = (
// //     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
// //       {Array(6)
// //         .fill('')
// //         .map((_, index) => (
// //           <TextField
// //             key={index}
// //             name={otp[${index}]}
// //             label=""
// //             onChange={(e) => handleInputChange1(e, index)}
// //             inputRef={inputRefs[index]}
// //             sx={{
// //               width: '40px',
// //               // height: '40px',
// //               fontSize: '1.5rem',
// //               textAlign: 'center',
// //               "& .css-5apaj5-MuiInputBase-root-MuiOutlinedInput-root": {
// //                 background: "#E7E7E7",

// //               }
// //             }}
// //           />
// //         ))}
// //     </div>
// //   );
// //   console.log("🚀 ~ file: index.tsx:666 ~ customOTPInput:", customOTPInput)
// //   return (
// //     // <Modal
// //     //   open={true}
// //     //   onClose={handleClose}
// //     //   aria-labelledby="modal-modal-title"
// //     //   aria-describedby="modal-modal-description"
// //     //   sx={{
// //     //     '& .MuiBackdrop-root': { backgroundColor: 'transparent', },
// //     //   }}>
// //     //   <Grid>
// //     //     <Box display="flex" justifyContent="end">
// //     //       <IconButton sx={{ textAlign: "end" }} onClick={onClose} color="inherit">
// //     //         <ClearIcon />
// //     //       </IconButton>

// //     //     </Box>
// //     //     <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
// //     //       <Avatar sx={{ width: "200px", height: "65px" }} src="/logo/TrilobyteLogo.png" alt="Your Logo" />
// //     //     </Box>
// //     //     <Typography sx={styles.subHEadings} mb={3}>Enter the OTP received on the email</Typography>
// //     //     <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography>

// //     //     <Stack mt={3}>
// //     //       {customOTPInput}
// //     //     </Stack>

// //     //     <Typography variant="body2" mt={3} sx={{ fontSize: "11px" }}>Code hasn't arrived? <Link>You can retry in 00:15</Link></Typography>
// //     //     <Box mt={4}>
// //     //       <Button variant="contained" color="primary" onClick={handleVerify} fullWidth>
// //     //         Verify
// //     //       </Button>
// //     //     </Box>
// //     //     <Grid item xs={12}>
// //     //       <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px" }}>
// //     //         <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
// //     //       </Typography>
// //     //     </Grid>
// //     //   </Grid>
// //     // </Modal>
// //     <Grid sx={styles.otpForm}>

// //       <CardContent>
// //         <Box display="flex" justifyContent="end">
// //           <IconButton sx={{ textAlign: "end" }} onClick={onClose} color="inherit">
// //             <ClearIcon />
// //           </IconButton>

// //         </Box>
// //         <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
// //           <Avatar sx={{ width: "200px", height: "65px" }} src="/logo/TrilobyteLogo.png" alt="Your Logo" />
// //         </Box>
// //         <Typography sx={styles.subHEadings} mb={3}>Enter the OTP received on the email</Typography>
// //         <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography>

// //         <Stack mt={3}>
// //           {customOTPInput}
// //         </Stack>

// //         <Typography variant="body2" mt={3} sx={{ fontSize: "11px" }}>Code hasn't arrived? <Link>You can retry in 00:15</Link></Typography>
// //         <Box mt={4}>
// //           <Button variant="contained" color="primary" onClick={handleVerify} fullWidth>
// //             Verify email address
// //           </Button>
// //         </Box>
// //         <Grid item xs={12}>
// //           <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px" }}>
// //             <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
// //           </Typography>
// //         </Grid>
// //       </CardContent>
// //     </Grid>
// //   );
// // };

// // const MobileOtpForm: React.FC<OtpFormProps> = ({ onClose, onNext, onBack }) => {
// //   const [open, setOpen] = React.useState(false);
// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);
// //   const [otp, setOtp] = useState('');

// //   const verifyMobileOtp = () => {
// //     // logic for verifying OTP
// //     onNext()
// //   };

// //   const inputRefs = Array(6).fill(null).map(() => useRef<HTMLInputElement | null>(null));
// //   const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
// //     const { value } = e.target;
// //     setOtp((prevOtp: any) => {
// //       const newOtp = prevOtp.substring(0, index) + value + prevOtp.substring(index + 1);
// //       return newOtp;
// //     });

// //     if (inputRefs[index + 1]) {
// //       inputRefs[index + 1].current?.focus();
// //     }
// //   };

// //   const customOTPInput = (
// //     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
// //       {Array(6)
// //         .fill('')
// //         .map((_, index) => (
// //           <TextField
// //             key={index}
// //             name={otp[${index}]}
// //             label=""
// //             onChange={(e) => handleInputChange1(e, index)}
// //             inputRef={inputRefs[index]}
// //             sx={{
// //               width: '40px',
// //               // height: '40px',
// //               fontSize: '1.5rem',
// //               textAlign: 'center',
// //               "& .css-5apaj5-MuiInputBase-root-MuiOutlinedInput-root": {
// //                 background: "#E7E7E7",

// //               }
// //             }}
// //           />
// //         ))}
// //     </div>
// //   );

// //   return (
// //     // <Modal
// //     //   open={true}
// //     //   onClose={handleClose}
// //     //   aria-labelledby="modal-modal-title"
// //     //   aria-describedby="modal-modal-description"
// //     //   sx={{
// //     //     '& .MuiBackdrop-root': { backgroundColor: 'transparent', },
// //     //   }}>
// //     //   <Grid>
// //     //     <Box display="flex" justifyContent="end">
// //     //       <IconButton sx={{ textAlign: "end" }} onClick={onClose} color="inherit">
// //     //         <ClearIcon />
// //     //       </IconButton>

// //     //     </Box>
// //     //     <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
// //     //       <Avatar sx={{ width: "200px", height: "65px" }} src="/logo/TrilobyteLogo.png" alt="Your Logo" />
// //     //     </Box>
// //     //     <Typography sx={styles.subHEadings} mb={3}>Enter the OTP received on the email</Typography>
// //     //     <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography>

// //     //     <Stack mt={3}>
// //     //       {customOTPInput}
// //     //     </Stack>
// //     //     <Typography variant="body2" mt={3} sx={{ fontSize: "11px" }}>Code hasn't arrived? <Link>You can retry in 00:15</Link></Typography>
// //     //     <Box mt={4}>
// //     //       <Button variant="contained" color="primary" onClick={handleVerify} fullWidth>
// //     //         Verify
// //     //       </Button>
// //     //     </Box>
// //     //     <Grid item xs={12}>
// //     //       <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px" }}>
// //     //         <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
// //     //       </Typography>
// //     //     </Grid>
// //     //   </Grid>
// //     // </Modal>
// //     <Grid sx={styles.otpForm}>

// //       <CardContent>
// //         <Box display="flex" justifyContent="end">
// //           <IconButton sx={{ textAlign: "end" }} onClick={onClose} color="inherit">
// //             <ClearIcon />
// //           </IconButton>

// //         </Box>
// //         <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
// //           <Avatar sx={{ width: "200px", height: "65px" }} src="/logo/TrilobyteLogo.png" alt="Your Logo" />
// //         </Box>
// //         <Typography sx={styles.subHEadings} mb={3}>Enter the OTP received on mobile number.</Typography>
// //         {/* <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography> */}

// //         <Stack mt={3}>
// //           {customOTPInput}
// //         </Stack>
// //         <Typography variant="body2" mt={3} sx={{ fontSize: "11px" }}>Code hasn't arrived? <Link>You can retry in 00:15</Link></Typography>
// //         <Box mt={4}>
// //           <Button variant="contained" color="primary" onClick={verifyMobileOtp} fullWidth>
// //             Verify mobile number
// //           </Button>
// //         </Box>
// //         <Grid item xs={12}>
// //           <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px" }}>
// //             <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
// //           </Typography>
// //         </Grid>
// //       </CardContent>
// //     </Grid>
// //   );
// // };

// // interface EmailOtpProps {
// //   onClose: () => void;
// //   onNext: () => void;
// //   onBack: () => void;
// // }

// // const EmailOtpForm: React.FC<EmailOtpProps> = ({ onClose, onNext, onBack }) => {
// //   const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
// //   const [error, setError] = useState<string>('');

// //   const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null).map(() => null));

// //   const verifyEmailOtp = () => {
// //     const isOtpValid = otp.every((digit) => /\d/.test(digit));
// //     if (isOtpValid) {
// //       onNext();
// //       setError(''); // Clear any previous errors
// //     } else {
// //       setError('Invalid OTP. Please enter a valid 6-digit OTP.');
// //     }
// //   };

// //   const handleInputChange = (index: number, value: string) => {
// //     setOtp((prevOtp) => {
// //       const newOtp = [...prevOtp];
// //       newOtp[index] = value;
// //       return newOtp;
// //     });

// //     // Move focus to the next input
// //     if (index < inputRefs.current.length - 1 && value !== '' && /\d/.test(value)) {
// //       inputRefs.current[index + 1]?.focus();
// //     }
// //   };

// //   const customOTPInput = (
// //     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
// //       {otp.map((digit, index) => (
// //         <TextField
// //           key={index}
// //           value={digit}
// //           onChange={(e) => handleInputChange(index, e.target.value)}
// //           inputRef={(ref) => (inputRefs.current[index] = ref)}
// //           sx={{
// //             width: '40px',
// //             fontSize: '1.5rem',
// //             textAlign: 'center',
// //             "& .css-5apaj5-MuiInputBase-root-MuiOutlinedInput-root": {
// //               background: "#E7E7E7",
// //             },
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );

// //   return (
// //     <Grid sx={styles.otpForm}>

// //     <CardContent>
// //       <Box display="flex" justifyContent="end">
// //         <IconButton sx={{ textAlign: "end" }} onClick={onClose} color="inherit">
// //           <ClearIcon />
// //         </IconButton>

// //       </Box>
// //       <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
// //         <Avatar sx={{ width: "200px", height: "65px" }} src="/logo/TrilobyteLogo.png" alt="Your Logo" />
// //       </Box>
// //       <Typography sx={styles.subHEadings} mb={3}>Enter the OTP received on the email</Typography>
// //       <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography>

// //       <Stack mt={3}>
// //         {customOTPInput}
// //       </Stack>
// //   {error && (
// //     <Typography variant="body2" color="error" mt={2} sx={{ fontSize: "11px" }}>
// //       {error}
// //     </Typography>
// //   )}
// //       <Typography variant="body2" mt={3} sx={{ fontSize: "11px" }}>Code hasn't arrived? <Link>You can retry in 00:15</Link></Typography>
// //       <Box mt={4}>
// //         <Button variant="contained" color="primary" onClick={verifyEmailOtp} fullWidth>
// //           Verify email address
// //         </Button>
// //       </Box>
// //       <Grid item xs={12}>
// //         <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px" }}>
// //           <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
// //         </Typography>
// //       </Grid>
// //     </CardContent>
// //   </Grid>
// //   );
// // };

// // interface MobileOtpProps {
// //   onClose: () => void;
// //   onNext: () => void;
// //   onBack: () => void;
// // }

// // const MobileOtpForm: React.FC<MobileOtpProps> = ({ onClose, onNext, onBack }) => {
// //   const [otp, setOtp] = useState<string>('');
// //   const [error, setError] = useState<string>('');

// //   const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null).map(() => null));

// //   const verifyMobileOtp = () => {
// //     const isOtpValid = otp.length === 6 && /^\d+$/.test(otp);
// //     if (isOtpValid) {
// //       onNext();
// //       setError('');
// //     } else {
// //       setError('Invalid OTP. Please enter a valid 6-digit OTP.');
// //     }
// //   };

// //   const handleInputChange = (index: number, value: string) => {
// //     setOtp((prevOtp) => {
// //       const newOtp = prevOtp.substring(0, index) + value + prevOtp.substring(index + 1);
// //       return newOtp;
// //     });

// //     if (index < inputRefs.current.length - 1 && value !== '' && /\d/.test(value)) {
// //       inputRefs.current[index + 1]?.focus();
// //     }
// //   };

// //   const customOTPInput = (
// //     <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
// //       {Array(6).fill('').map((_, index) => (
// //         <TextField
// //           key={index}
// //           name={otp[${index}]}
// //           label=""
// //           onChange={(e) => handleInputChange(index, e.target.value)}
// //           inputRef={(ref) => (inputRefs.current[index] = ref)}
// //           sx={{
// //             width: '40px',
// //             fontSize: '1.5rem',
// //             textAlign: 'center',
// //             "& .css-5apaj5-MuiInputBase-root-MuiOutlinedInput-root": {
// //               background: "#E7E7E7",
// //             },
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );

// //   return (
// //     <Grid sx={styles.otpForm}>

// //     <CardContent>
// //       <Box display="flex" justifyContent="end">
// //         <IconButton sx={{ textAlign: "end" }} onClick={onClose} color="inherit">
// //           <ClearIcon />
// //         </IconButton>

// //       </Box>
// //       <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
// //         <Avatar sx={{ width: "200px", height: "65px" }} src="/logo/TrilobyteLogo.png" alt="Your Logo" />
// //       </Box>
// //       <Typography sx={styles.subHEadings} mb={3}>Enter the OTP received on the email</Typography>
// //       <Typography sx={{ ...styles.TextCss, textAlign: "center" }} mt={2}>Check your spam folder and the spelling of your email address</Typography>

// //       <Stack mt={3}>
// //         {customOTPInput}
// //       </Stack>
// //   {error && (
// //     <Typography variant="body2" color="error" mt={2} sx={{ fontSize: "11px" }}>
// //       {error}
// //     </Typography>
// //   )}
// //       <Typography variant="body2" mt={3} sx={{ fontSize: "11px" }}>Code hasn't arrived? <Link>You can retry in 00:15</Link></Typography>
// //       <Box mt={4}>
// //         <Button variant="contained" color="primary" onClick={verifyMobileOtp} fullWidth>
// //           Verify email address
// //         </Button>
// //       </Box>
// //       <Grid item xs={12}>
// //         <Typography variant="body2" sx={{ fontSize: '11px', marginTop: "8px" }}>
// //           <Link onClick={onBack} sx={{ cursor: "pointer" }}>Go back</Link>
// //         </Typography>
// //       </Grid>
// //     </CardContent>
// //   </Grid>
// //   );
// // };

// // interface FormValuesProps {
// //   firstName: string;
// //   lastName: string;
// //   email: string;
// //   country: string;
// //   phoneNumber: number;
// //   companyRelation: string;
// // }

// // const validationSchema = Yup.object().shape({
// //   firstName: Yup.string().required('First Name is required'),
// //   lastName: Yup.string().required('Last Name is required'),
// //   email: Yup.string().email('Invalid email').required('Email is required'),
// //   country: Yup.string().required('Country is required'),
// //   phoneNumber: Yup.string().required('Phone Number is required'),
// //   companyRelation: Yup.string().required('Company Relation is required'),
// // });

// // const ApplyForm: React.FC<ApplyFormProps> = ({ onNext, onBack }) => {
// //   const {
// //     control,
// //     handleSubmit,
// //     formState: { errors, isSubmitting, isSubmitSuccessful },
// //   } = useForm<FormValuesProps>({
// //     resolver: yupResolver(validationSchema),
// //   });

// //   // const onSubmit = async (data: FormValuesProps) => {
// //   // // const onSubmit: SubmitHandler<YourFormDataInterface> = async (data) => {
// //   //   console.log(data);
// //   //   onNext();
// //   // };
// //   const onSubmit: SubmitHandler<FormValuesProps> = async (data) => {
// //     console.log(data);
// //     onNext();
// //   };
// //   return (
// //     <Grid sx={styles.detailsForm}>
// //       <CardContent>
// //         <Typography variant="h6" sx={{ ...styles.Headings, textAlign: 'left' }}>
// //           Fill in your details
// //         </Typography>
// //         <Typography sx={{ ...styles.TextCss, mt: 1, mb: 2 }}>
// //           Since you are opening the account, we need some information about you
// //         </Typography>

// //         <form onSubmit={handleSubmit(onSubmit)}>
// //           <Grid container spacing={2} sx={styles.gridItem}>
// //             <Grid item xs={6} sx={styles.gridItem}>
// //               <Controller
// //                 name="firstName"
// //                 control={control}
// //                 render={({ field }) => (

// //                   <TextField
// //                     label="First Name"
// //                     {...field}
// //                     fullWidth
// //                     margin="normal"
// //                     required
// //                     type='text'
// //                     error={!!errors.firstName}
// //                     helperText={String(errors.firstName?.message||"")}
// //                   />
// //                 )}
// //               />
// //             </Grid>
// //             <Grid item xs={6} sx={styles.gridItem}>
// //               <Controller
// //                 name="lastName"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField
// //                     label="Last Name"
// //                     {...field}
// //                     fullWidth
// //                     type='text'
// //                     margin="normal"
// //                     required
// //                     error={!!errors.lastName}
// //                     helperText={String(errors.lastName?.message||"")}
// //                   />
// //                 )}
// //               />
// //             </Grid>
// //             <Grid item xs={12} sx={styles.gridItem}>
// //               <Controller
// //                 name="email"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField
// //                     label="Email"
// //                     {...field}
// //                     fullWidth
// //                     margin="normal"
// //                     required
// //                     type='text'
// //                     error={!!errors.email}
// //                     helperText={String(errors.email?.message||"")}
// //                   />
// //                 )}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <Controller
// //                 name="country"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField
// //                     label="Country"
// //                     {...field}
// //                     fullWidth
// //                     margin="normal"
// //                     select
// //                     type='text'
// //                     required
// //                     error={!!errors.country}
// //                     helperText={String(errors.country?.message||"")}
// //                   >
// //                     <MenuItem value="option1">Option 1</MenuItem>
// //                     <MenuItem value="option2">Option 2</MenuItem>
// //                   </TextField>
// //                 )}
// //               />
// //             </Grid>
// //             <Grid item xs={6}>
// //               <Controller
// //                 name="phoneNumber"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField
// //                     label="Phone Number"
// //                     {...field}
// //                     fullWidth
// //                     type='number'
// //                     margin="normal"
// //                     InputProps={{
// //                       startAdornment: <InputAdornment position="start">+91</InputAdornment>,
// //                     }}
// //                     required
// //                     error={!!errors.phoneNumber}
// //                     helperText={String(errors.phoneNumber?.message||"")}
// //                   />
// //                 )}
// //               />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Controller
// //                 name="companyRelation"
// //                 control={control}
// //                 render={({ field }) => (
// //                   <TextField
// //                     label="Company Relation"
// //                     {...field}
// //                     fullWidth
// //                     margin="normal"
// //                     select
// //                     type='text'
// //                     required
// //                     error={!!errors.companyRelation}
// //                     helperText={String(errors.companyRelation?.message||"")}
// //                   >
// //                     <MenuItem value="option1">Option 1</MenuItem>
// //                     <MenuItem value="option2">Option 2</MenuItem>
// //                   </TextField>
// //                 )}
// //               />
// //             </Grid>
// //           </Grid>

// //           <Box mt={2}>
// //             <Button variant="contained" color="primary" fullWidth type="submit">
// //               Continue
// //             </Button>
// //           </Box>

// //           <Grid item xs={12}>
// //             <Typography variant="body2" sx={{ fontSize: '11px', marginTop: '8px' }}>
// //               <Link onClick={onBack} sx={{ cursor: 'pointer' }}>
// //                 Go back
// //               </Link>
// //             </Typography>
// //           </Grid>
// //         </form>
// //       </CardContent>
// //     </Grid>
// //   );
// // };



