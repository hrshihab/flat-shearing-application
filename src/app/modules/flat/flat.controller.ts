import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { flatService } from "./flat.service";
import pick from "../../../shared/pick";
import { FilterableFlatFields } from "./flat.constant";

const addFlat = catchAsync(async (req, res) => {
  console.log("req body:", req.body);
  const result = await flatService.addFlat(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Flat added successfully",
    data: result,
  });
});

const getAllFlats = catchAsync(async (req, res) => {
  //console.log(req.query);
  const Filter = await pick(req.query, FilterableFlatFields);
  console.log(Filter);

  const result = await flatService.getAllFlats(Filter);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All flats fetched successfully",
    data: result,
  });
});

export const flatController = {
  addFlat,
  getAllFlats,
};
