
//1.Use a Static Server to Serve the Build Folder Locally. By running this commands we can test the build file of our eact app like is it working correctly or not we can install the build package and than run the serve -s build commnd which will run our app locally.

// npm install -g serve
// serve -s build






// ---------------------------

// signature verification in openphone


    
  // async create(payload: OpenPhoneEventDto) {
  //   try {
  //     // Validate the payload
  //     const errors = await validate(payload);
  //     if (errors.length > 0) {
  //       const errorMessages = errors
  //         .map((error) => Object.values(error.constraints))
  //         .flat();
  //       throw new BadRequestException(
  //         `Invalid payload: ${errorMessages.join(", ")}`
  //       );
  //     }

  //     const messageData = payload.data.object;
  //     const body = messageData.body || null; // Handle the case where body might be null

  //     // Check event type
  //     const eventTypeId = this.getEventTypeId(payload.type);
  //     if (eventTypeId === null || eventTypeId === undefined) {
  //       throw new BadRequestException(`Invalid event type: ${payload.type}`);
  //     }

  //     let addressId = null;
  //     let addressCreated = false;
  //     let auctionTypeId = null;

  //     // Extract address from body if body is not null and save it
  //     if (body) {
  //       const extractedInfo = this.extractInformation(body);

  //       auctionTypeId = this.auctionTypeId(extractedInfo.auction_type);
  //       if (
  //         !extractedInfo.address &&
  //         payload.data.object.status === "outgoing"
  //       ) {
  //         throw new BadRequestException("Extracted address is null or empty");
  //       }

  //       // Check if the address already exists
  // const existingAddress = await this.addressRepository.findOne({
  //   where: { address: extractedInfo.address },
  // });

  //       if (!existingAddress) {
  //         const addressDto: AddressDto = {
  //           address: extractedInfo.address,
  //           date: extractedInfo.date || new Date(),
  //           created_by: "Ram",
  //           is_active: true,
  //           is_bookmarked: false,
  //           auction_event_id: auctionTypeId,
  //         };

  //         // Validate the addressDto
  //         const addressErrors = await validate(addressDto);
  //         if (addressErrors.length > 0) {
  //           const errorMessages = addressErrors
  //             .map((error) => Object.values(error.constraints))
  //             .flat();
  //           throw new BadRequestException(
  //             `Invalid address data: ${errorMessages.join(", ")}`
  //           );
  //         }
  //         if (
  //           addressDto.auction_event_id === null ||
  //           addressDto.auction_event_id === undefined
  //         ) {
  //           throw new BadRequestException("Invalid auction_event_id");
  //         }

  //         const savedAddress =
  //           await this.addressService.createAddress(addressDto);

  //         addressId = savedAddress.id;
  //         addressCreated = true;
  //       } else {
  //         addressId = existingAddress.id;
  //       }
  //     }

  //     const existingEvent = await this.openPhoneEventRepository.findOne({
  //       where: { conversation_id: messageData.conversationId },
  //     });

  //     const openPhoneEvent = new OpenPhoneEventEntity();
  //     openPhoneEvent.event_type_id = eventTypeId;
  //     openPhoneEvent.address_id =
  //       messageData.status === "delivered"
  //         ? existingEvent?.address_id
  //         : addressId;
  //     openPhoneEvent.auction_event_id = !existingEvent ? auctionTypeId : null;
  //     if (existingEvent !== null) {
  //       if (
  //         existingEvent.conversation_id === messageData.conversationId &&
  //         messageData.status === "received" &&
  //         existingEvent.to !== messageData.from
  //       ) {
  //         openPhoneEvent.address_id = null;
  //       }
  //     }

  //     openPhoneEvent.event_direction_id = this.getEventDirectionId(
  //       messageData.direction
  //     );
  //     openPhoneEvent.from = messageData.from;
  //     openPhoneEvent.to = messageData.to;
  //     openPhoneEvent.body = body;
  //     openPhoneEvent.url =
  //       messageData.media && messageData.media.length > 0
  //         ? messageData.media[0].url
  //         : "url";
  //     openPhoneEvent.url_type =
  //       messageData.media && messageData.media.length > 0
  //         ? messageData.media[0].type
  //         : "image";
  //     openPhoneEvent.conversation_id = messageData.conversationId;
  //     openPhoneEvent.created_at = messageData.createdAt;
  //     openPhoneEvent.received_at = payload.createdAt;
  //     openPhoneEvent.contact_established = "NA";
  //     openPhoneEvent.dead = "No";
  //     openPhoneEvent.keep_an_eye = "Yes";
  //     openPhoneEvent.is_stop = messageData.body === "Stop" ? true : false;
  //     openPhoneEvent.created_by = "Ram";
  //     openPhoneEvent.phone_number_id = messageData.phoneNumberId;
  //     openPhoneEvent.user_id = messageData.userId;

  //     // Validate the openPhoneEvent
  //     const eventErrors = await validate(openPhoneEvent);
  //     if (eventErrors.length > 0) {
  //       const errorMessages = eventErrors
  //         .map((error) => Object.values(error.constraints))
  //         .flat();
  //       throw new BadRequestException(
  //         `Invalid open phone event data: ${errorMessages.join(", ")}`
  //       );
  //     }

  //     const savedOpenPhoneEvent =
  //       await this.openPhoneEventRepository.save(openPhoneEvent);
  //     await this.notificationService.createNotification(savedOpenPhoneEvent.id);
  //     const auctionEventDto: AuctionEventDto = {
  //       event_id: savedOpenPhoneEvent.id,
  //       created_by: "Ram",
  //     };

  //     // Validate the auctionEventDto
  //     const auctionErrors = await validate(auctionEventDto);
  //     if (auctionErrors.length > 0) {
  //       const errorMessages = auctionErrors
  //         .map((error) => Object.values(error.constraints))
  //         .flat();
  //       throw new BadRequestException(
  //         `Invalid auction event data: ${errorMessages.join(", ")}`
  //       );
  //     }

  //     const saveEventId = await this.auctionService.create(auctionEventDto);

  //     return { openPhoneEvent: savedOpenPhoneEvent, addressCreated };
  //   } catch (error) {
  //     console.error("Error in create method:", error);
  //     if (error instanceof BadRequestException) {
  //       throw error;
  //     }
  //     if (error instanceof Error) {
  //       // Check if the error is a database constraint violation
  //       if (error.message.includes("violates not-null constraint")) {
  //         throw new BadRequestException(`Invalid data: ${error.message}`);
  //       }
  //       throw new InternalServerErrorException(
  //         `Error saving open phone event: ${error.message}`
  //       );
  //     }
  //     throw new InternalServerErrorException("An unknown error occurred");
  //   }
  // }

  // async create(
  //   payload: OpenPhoneEventDto,
  //   signature: string,
  //   isLocalEnv: boolean
  // ) {
  //   try {
  //     if (!isLocalEnv) {
  //       this.verifySignature(signature, payload);
  //     }

  //     // Validate the payload
  //     const errors = await validate(payload);
  //     if (errors.length > 0) {
  //       const errorMessages = errors
  //         .map((error) => Object.values(error.constraints))
  //         .flat();
  //       throw new BadRequestException(
  //         `Invalid payload: ${errorMessages.join(", ")}`
  //       );
  //     }

  //     const messageData = payload.data.object;
  //     const body = messageData.body || null;

  //     // Check event type
  //     const eventTypeId = this.getEventTypeId(payload.type);
  //     if (eventTypeId === null || eventTypeId === undefined) {
  //       throw new BadRequestException(`Invalid event type: ${payload.type}`);
  //     }

  //     let addressId = null;
  //     let addressCreated = false;
  //     let auctionTypeId = null;
  //     const existingEvent = await this.openPhoneEventRepository.findOne({
  //       where: { conversation_id: messageData.conversationId },
  //     });
  //     // Extract address from body if body is not null and save it
  //     if (body) {
  //       const extractedInfo = this.extractInformation(body);

  //       auctionTypeId = this.auctionTypeId(extractedInfo.auction_type);
  //       if (
  //         !extractedInfo.address &&
  //         payload.data.object.status === "outgoing"
  //       ) {
  //         throw new BadRequestException("Extracted address is null or empty");
  //       }

  //       const existingAddress = await this.addressRepository.findOne({
  //         where: { address: extractedInfo.address },
  //       });

  //       if (!existingAddress) {
  //         const addressDto: AddressDto = {
  //           address: extractedInfo.address,
  //           date: extractedInfo.date || new Date(),
  //           created_by: "Ram",
  //           is_active: true,
  //           is_bookmarked: false,
  //           auction_event_id: auctionTypeId,
  //         };

  //         // Validate the addressDto
  //         const addressErrors = await validate(addressDto);
  //         if (addressErrors.length > 0) {
  //           const errorMessages = addressErrors
  //             .map((error) => Object.values(error.constraints))
  //             .flat();
  //           throw new BadRequestException(
  //             `Invalid address data: ${errorMessages.join(", ")}`
  //           );
  //         }
  //         const savedAddress =
  //           await this.addressService.createAddress(addressDto);

  //         addressCreated = true;
  //         addressId = savedAddress.id;
  //       } 
  //       // else {
  //       //   addressId = existingAddress.id;
  //       // }
  //     }

  //     const openPhoneEvent = new OpenPhoneEventEntity();
  //     openPhoneEvent.event_type_id = eventTypeId;
  //     openPhoneEvent.address_id =
  //       messageData.status === "delivered" && existingEvent ? null : addressId;
  //     openPhoneEvent.auction_event_id = !existingEvent ? auctionTypeId : null;
  //     if (existingEvent !== null) {
  //       if (
  //         existingEvent.conversation_id === messageData.conversationId &&
  //         messageData.status === "received" &&
  //         addressCreated
  //       ) {
  //         openPhoneEvent.address_id = addressId;
  //       }
  //     }

  //     openPhoneEvent.event_direction_id = this.getEventDirectionId(
  //       messageData.direction
  //     );
  //     openPhoneEvent.from = messageData.from;
  //     openPhoneEvent.to = messageData.to;
  //     openPhoneEvent.body = body;
  //     openPhoneEvent.url =
  //       messageData.media && messageData.media.length > 0
  //         ? messageData.media[0].url
  //         : "url";
  //     openPhoneEvent.url_type =
  //       messageData.media && messageData.media.length > 0
  //         ? messageData.media[0].type
  //         : "image";
  //     openPhoneEvent.conversation_id = messageData.conversationId;
  //     openPhoneEvent.created_at = messageData.createdAt;
  //     openPhoneEvent.received_at = payload.createdAt;
  //     openPhoneEvent.contact_established = "NA";
  //     openPhoneEvent.dead = "No";
  //     openPhoneEvent.keep_an_eye = "Yes";
  //     openPhoneEvent.is_stop = messageData.body === "Stop";
  //     openPhoneEvent.created_by = "Ram";
  //     openPhoneEvent.phone_number_id = messageData.phoneNumberId;
  //     openPhoneEvent.user_id = messageData.userId;

  //     // Validate the openPhoneEvent
  //     const eventErrors = await validate(openPhoneEvent);
  //     if (eventErrors.length > 0) {
  //       const errorMessages = eventErrors
  //         .map((error) => Object.values(error.constraints))
  //         .flat();
  //       throw new BadRequestException(
  //         `Invalid open phone event data: ${errorMessages.join(", ")}`
  //       );
  //     }

  //     const savedOpenPhoneEvent =
  //       await this.openPhoneEventRepository.save(openPhoneEvent);
  //     await this.notificationService.createNotification(savedOpenPhoneEvent.id);

  //     const auctionEventDto: AuctionEventDto = {
  //       event_id: savedOpenPhoneEvent.id,
  //       created_by: "Ram",
  //     };

  //     // Validate the auctionEventDto
  //     const auctionErrors = await validate(auctionEventDto);
  //     if (auctionErrors.length > 0) {
  //       const errorMessages = auctionErrors
  //         .map((error) => Object.values(error.constraints))
  //         .flat();
  //       throw new BadRequestException(
  //         `Invalid auction event data: ${errorMessages.join(", ")}`
  //       );
  //     }

  //     await this.auctionService.create(auctionEventDto);

  //     return { openPhoneEvent: savedOpenPhoneEvent, addressCreated };
  //   } catch (error) {
  //     console.error("Error in create method:", error);
  //     if (error instanceof BadRequestException) {
  //       throw error;
  //     }
  //     if (error instanceof Error) {
  //       if (error.message.includes("violates not-null constraint")) {
  //         throw new BadRequestException(`Invalid data: ${error.message}`);
  //       }
  //       throw new InternalServerErrorException(
  //         `Error saving open phone event: ${error.message}`
  //       );
  //     }
  //     throw new InternalServerErrorException("An unknown error occurred");
  //   }
  // }




//   private verifySignature(signature: string, payload: any) {
//     const signingKey = process.env.OPENPHONE_SIGNING_KEY;
//     if (!signingKey) {
//       throw new BadRequestException("OpenPhone signing key is not configured");
//     }

//     const fields = signature.split(";");

//     const timestamp = fields
//       .find((field) => field.startsWith("t="))
//       .split("=")[1];
//     const providedDigest = fields
//       .find((field) => field.startsWith("d="))
//       .split("=")[1];

//     // Construct the signedData string
//     const signedData = `${timestamp}.${JSON.stringify(payload)}`;

//     // Convert the signing key from base64 to binary
//     const signingKeyBinary = Buffer.from(signingKey, "base64").toString(
//       "binary"
//     );

//     // Compute the digest
//     const computedDigest = createHmac("sha256", signingKeyBinary)
//       .update(Buffer.from(signedData, "utf8"))
//       .digest("base64");

//     // Compare the provided digest with the computed one
//     if (providedDigest !== computedDigest) {
//       throw new BadRequestException("Invalid signature");
//     }
  //}
