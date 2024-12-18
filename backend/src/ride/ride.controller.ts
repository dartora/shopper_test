import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { RideService } from './ride.service';
// import { UpdateRideDto } from './dto/update-ride.dto';
import { EstimateRideDto } from './dto/estimate-ride.dto';
import { CreateRideDto } from './dto/create-ride.dto';

@Controller('ride')
export class RideController {
  constructor(private readonly rideService: RideService) { }
  
  @Post('confirm')
  create(@Body() createRideDto: CreateRideDto) {
    console.log(createRideDto);
    return this.rideService.create(createRideDto);
  }

  @Get()
  findAll() {
    return this.rideService.findAll();
  }

  @Get(':customer_id')
  findOne(@Param('customer_id') customerId: string, @Query('driver_id') driverId?: string) {
    return this.rideService.findOne(+customerId, driverId);
  }
  @Post('estimate')
  estimate(@Body() estimateRideDto: EstimateRideDto) {
    return this.rideService.estimate(estimateRideDto);
  }
  

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.rideService.remove(id);
  }
}
