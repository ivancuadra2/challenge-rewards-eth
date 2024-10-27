// import React from 'react';
import { Group } from '@visx/group';
import { scaleTime, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { LinePath } from '@visx/shape';
import { Tooltip, useTooltip } from '@visx/tooltip';
import { localPoint } from '@visx/event';
import PropTypes from 'prop-types';
import {Card, Skeleton} from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';



const width = 800;
const height = 400;
const margin = { top: 20, right: 30, bottom: 50, left: 60 };


const EthereumChart = ({ data, loading }) => {
  const [promedioDiario, setPromedioDiario] = useState(0)
  useEffect(() => {
    setPromedioDiario(data.reduce((acc, d) => acc + d.reward, 0) / data.length)
  }, [data])
  // Escalas
  const xScale = scaleTime({
    domain: [new Date(data[0]?.date), new Date(data[data.length - 1]?.date)],
    range: [margin.left, width - margin.right],
  });
  


  // setPromedioDiario(data.reduce((acc, d) => acc + d.reward, 0) / data.length)
  const yScale = scaleLinear({
    domain: [0, Math.max(...data.map(d => d.reward))],
    range: [height - margin.bottom, margin.top],
  });

  // Tooltip setup
  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip();

  const handleMouseOver = (event, datum) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    showTooltip({
      tooltipData: datum,
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
    });
  };

  if (loading) {
    return <SkeletonCard />
  }

  return (
    <Card>
      <Grid container size={12} justifyContent="center" alignItems='center' sx={{ padding: 2 }} > 
        <Grid container size={8} justifyContent="center" >
          <Typography variant='h6' >
            Gráfico de recompensas de Ethereum 
          </Typography>
      </Grid>
      <Grid container size={4} alignItems='center' flexDirection='column' >
        <Typography variant='h5'>
          {promedioDiario.toFixed(2)} 
        </Typography>
        <Typography variant='caption'>
          Promedio diario en ETH
        </Typography>
      </Grid>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
          <Group>
            {/* Ejes */}
            <AxisLeft
              scale={yScale}
              left={margin.left}
              label="Rewards (ETH)"
            />
            <AxisBottom
              scale={xScale}
              top={height - margin.bottom}
              label="Date"
            />

            {/* Línea de datos */}
            <LinePath
              data={data}
              x={d => xScale(new Date(d.date))}
              y={d => yScale(d.reward)}
              stroke="#4f46e5"
              strokeWidth={2}
            />

            {/* Puntos */}
            {data.map((d, i) => (
              <circle
                key={i}
                cx={xScale(new Date(d.date))}
                cy={yScale(d.reward)}
                r={4}
                fill="#4f46e5"
                onMouseOver={(e) => handleMouseOver(e, d)}
                onMouseOut={hideTooltip}
              />
            ))}
          </Group>
        </svg>

        {/* Tooltip */}
        {tooltipData && (
          <Tooltip
            top={tooltipTop}
            left={tooltipLeft}
            style={{
              backgroundColor: 'white',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <div>
              <strong>Date:</strong> {tooltipData.date}
              <br />
              <strong>Reward:</strong> {tooltipData.reward.toFixed(2)} ETH
            </div>
          </Tooltip>
        )}
      </div>
      </Grid>
    </Card>
  );
};

const SkeletonCard =  () =>  {
  return (
    <Card>
      <Grid container size={12} justifyContent="center" alignItems='center' sx={{ padding: 2 }} > 
        <Grid container size={8} justifyContent="center" >
          <Typography variant='h6' >
            Gráfico de recompensas de Ethereum 
          </Typography>
      </Grid>
      <Grid container size={4} alignItems='center' flexDirection='column' >
      <Typography variant='h5'>
          <Skeleton variant="text" width={50} /> 
        </Typography>
        <Typography variant='caption'>
          Promedio diario en ETH
        </Typography>
      </Grid>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Skeleton variant="rectangular" height={300} />
        </div>
      </Grid>
    </Card>
  )
}

EthereumChart.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
          // frequency: PropTypes.number.isRequired,
          date: PropTypes.string.isRequired,
      })
  ).isRequired,
  loading: PropTypes.bool,
};

export default EthereumChart;